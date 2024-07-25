// app/components/StoryList.tsx
import React from 'react';
import { View, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Story } from '../types/story';

interface StoryListProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
}

const StoryList: React.FC<StoryListProps> = ({ stories, onSelectStory }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={stories}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelectStory(item)}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    backgroundColor: 'white',
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 8,
  },
});

export default StoryList;
