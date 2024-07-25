import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Story } from '../types/story';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface StoryComponentProps {
  story: Story;
  onNext: () => void;
  onPrevious: () => void;
  onExit: () => void;
  duration: number;
}

const StoryComponent: React.FC<StoryComponentProps> = ({ story, onNext, onPrevious, duration }) => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(onNext, duration);
    return () => clearTimeout(timer);
  }, [story, duration, onNext]);

  const handleExit = () => {
    // Navigate to home
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: story.image }} style={styles.image} />
      <View style={styles.header}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={handleExit} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Image source={{ uri: story.avatar }} style={styles.avatar} />
          <Text style={styles.username}>{story.username}</Text>
          <Text style={styles.timestamp}>{story.timestamp}</Text>
        </View>
        </View>
        <TouchableOpacity onPress={handleExit} style={styles.closeButton}>
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.leftSide} onPress={onPrevious} />
      <TouchableOpacity style={styles.rightSide} onPress={onNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    zIndex: 1,
  },
  backButton: {
    padding: 8,
  },
  closeButton: {
    padding: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 8,
  },
  timestamp: {
    color: 'white',
  },
  leftSide: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '50%',
  },
  rightSide: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: '50%',
  },
});

export default StoryComponent;
