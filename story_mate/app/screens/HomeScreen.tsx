// screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Platform, StatusBar, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Story } from '../types/story';
import StoryComponent from '../components/StoryComponent';
import StoryList from '../components/StoryList';
import Post from '../components/Post';
import dummyStories from '../data/dummyStories'; // Ensure this import is correct

const HomeScreen: React.FC = () => {
  const [stories, setStories] = useState<Story[]>(dummyStories);
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number | null>(null);
  const navigation = useNavigation();

  const handleSelectStory = (story: Story) => {
    navigation.navigate('Stories', { selectedStory: story });
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>StoryMate</Text>
      </View>
      {stories.length === 0 ? (
        <View style={styles.header}>
          <Text style={styles.headerText}>StoryMate</Text>
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
});

export default HomeScreen;
