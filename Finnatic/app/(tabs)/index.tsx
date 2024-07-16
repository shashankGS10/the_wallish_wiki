import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, FlatList } from 'react-native';
import axios from 'axios';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrapedData, setScrapedData] = useState('');

  const fetchResponse = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/get-response');
      return response.data[response.data.length - 1]?.scrapeData || '';
    } catch (error) {
      Alert.alert('Error', 'There was an error fetching the response.');
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    if (!inputValue.trim()) {
      Alert.alert('Error', 'Please enter a website URL.');
      return;
    }

    const userMessage = { type: 'user', text: inputValue };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setLoading(true);

    try {
      await axios.post('http://localhost:3000/api/submit', { message: inputValue });

      const responseMessage = await fetchResponse();
      setScrapedData(responseMessage);

      const botMessage = { type: 'bot', text: responseMessage };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      Alert.alert('Error', 'There was an error submitting your message.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={item.type === 'user' ? styles.userMessage : styles.botMessage}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <HelloWave />
      <ThemedView>
        <View style={styles.hero}>
          <View style={styles.heroText}>
            <Text style={styles.heroTitle}>
              Welcome to Finnatic!
            </Text>
            <Text style={styles.heroSubtitle}>
              Your one-stop shop for all things awesome.
            </Text>
          </View>
        </View>

        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.messageList}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter website URL"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Button title="Submit" onPress={handleSubmit} disabled={loading} />
        </View>

        <View style={styles.about}>
          <ThemedText type="title" style={styles.aboutTitle}>
            About Finnatic
          </ThemedText>
          <ThemedText style={styles.aboutText}>
            {scrapedData || 'Finnatic is a platform designed to connect people with their passions. Whether you\'re a gamer, a foodie, or a music lover, Finnatic has something for you. Join our community and discover new experiences, connect with like-minded individuals, and share your own passions with the world.'}
          </ThemedText>
        </View>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  hero: {
    backgroundColor: '#2C14DD',
    padding: 20,
    alignItems: 'center',
  },
  heroText: {
    textAlign: 'center',
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  heroSubtitle: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 20,
  },
  messageList: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    maxWidth: '80%',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    maxWidth: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  about: {
    padding: 20,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
