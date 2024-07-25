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
