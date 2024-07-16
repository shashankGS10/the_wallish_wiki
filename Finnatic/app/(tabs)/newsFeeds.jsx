import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText';

const NewsFeeds = () => {
  return (
    <View style={styles.container}>
      <ThemedText>News Feed</ThemedText>
    </View>
  )
}

export default NewsFeeds

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C14DD',
        alignItems: 'center',
        justifyContent: 'center',
      },
})