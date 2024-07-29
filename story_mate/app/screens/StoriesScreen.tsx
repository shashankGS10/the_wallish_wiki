// screens/StoriesScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Platform, StatusBar, Text, ActivityIndicator } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { Story } from '../types/story';
import StoryComponent from '../components/StoryComponent';
import fetchStories from '../utils/api';

type StoriesScreenRouteProp = RouteProp<RootStackParamList, 'StoriesScreen'>;
type StoriesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'StoriesScreen'>;

interface StoriesScreenProps {
  route: StoriesScreenRouteProp;
  navigation: StoriesScreenNavigationProp;
}

const StoriesScreen: React.FC<StoriesScreenProps> = ({ route, navigation }) => {
  const { selectedStory } = route.params;
  const [stories, setStories] = useState<Story[]>([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleNextStory = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const handlePreviousStory = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  const handleExitFullScreen = () => {
    navigation.navigate('Home');
  };

  // Fetch stories from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedStories = await fetchStories();
        setStories(fetchedStories);
        // Set the current story index based on the selected story
        const initialIndex = fetchedStories.findIndex(story => story.id === selectedStory.id);
        setCurrentStoryIndex(initialIndex >= 0 ? initialIndex : 0);
      } catch (err) {
        setError('Failed to load stories. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedStory]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StoryComponent
        story={stories[currentStoryIndex]}
        onNext={handleNextStory}
        onPrevious={handlePreviousStory}
        onExit={handleExitFullScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default StoriesScreen;
