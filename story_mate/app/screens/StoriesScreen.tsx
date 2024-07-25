// screens/StoriesScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Platform, StatusBar, Text } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { Story } from '../types/story';
import StoryComponent from '../components/StoryComponent';
import dummyStories from '../data/dummyStories';

type StoriesScreenRouteProp = RouteProp<RootStackParamList, 'StoriesScreen'>;
type StoriesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'StoriesScreen'>;

interface StoriesScreenProps {
  route: StoriesScreenRouteProp;
  navigation: StoriesScreenNavigationProp;
}

const StoriesScreen: React.FC<StoriesScreenProps> = ({ route, navigation }) => {
  const { selectedStory } = route.params;
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(dummyStories.indexOf(selectedStory));

  const handleNextStory = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % dummyStories.length);
  };

  const handlePreviousStory = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex - 1 + dummyStories.length) % dummyStories.length);
  };

  const handleExitFullScreen = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <StoryComponent
        story={dummyStories[currentStoryIndex]}
        onNext={handleNextStory}
        onPrevious={handlePreviousStory}
        onExit={handleExitFullScreen}
        duration={5000}
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
});

export default StoriesScreen;
