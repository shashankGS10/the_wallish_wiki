// app/components/StoryList.tsx
import React from 'react';
import { View, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
       <LinearGradient colors={['#F9CE34', '#EE2A7B', '#6228D7']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
       style={styles.colorCircle}>
            <Image source={{ uri: item.avatar }} style={styles.thumbnail} />
            
            </LinearGradient>
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
    width:85,
    height: 85,
    marginHorizontal: 5,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default StoryList;
