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
          <View style={styles.colorCircle}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            </View>
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
  colorCircle:{
    width:90,
    height: 90,
    marginHorizontal: 5,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  thumbnail: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
});

export default StoryList;
