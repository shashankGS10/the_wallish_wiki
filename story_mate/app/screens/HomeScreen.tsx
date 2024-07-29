// screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Platform, StatusBar, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Story } from '../types/story';
import StoryList from '../components/StoryList';
import Post from '../components/Post';
import fetchStories from '../utils/api';
import LoadingIndicator from '../components/LoadingIndicator'; // Import LoadingIndicator

const HomeScreen: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedStories = await fetchStories();
      setStories(fetchedStories);
    };
    fetchData();
  }, []);

  const handleSelectStory = (story: Story) => {
    navigation.navigate('Stories', { selectedStory: story });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>StoryMate</Text>
      </View>
      {stories.length === 0 ? (
        <View style={styles.loadingContainer}>
          <LoadingIndicator />
        </View>
      ) : (
        <>
          <StoryList stories={stories} onSelectStory={handleSelectStory} />
          <FlatList
            data={[{ id: '1', content: 'Dummy post content' }]}
            renderItem={({ item }) => <Post content={item.content} />}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default HomeScreen;
