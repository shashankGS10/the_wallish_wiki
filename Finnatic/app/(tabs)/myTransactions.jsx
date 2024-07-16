import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { ThemedText } from '@/components/ThemedText';

const MyTransactions = () => {
  return (
    <View style={styles.container}>
      <ThemedText>myTransactions</ThemedText>
    </View>
  )
}

export default MyTransactions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C14DD',
        alignItems: 'center',
        justifyContent: 'center',
      },
})