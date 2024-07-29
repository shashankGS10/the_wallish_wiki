// app/components/Post.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PostProps {
  content: string;
}

const Post: React.FC<PostProps> = ({ content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.content}>Write Test cases</Text>
      <Text style={styles.content}>Update readme.md</Text>
      <Text style={styles.content}>Share APK</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
  },
});

export default Post;
