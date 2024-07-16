import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const MyFormattedTextInput = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  // List of abusive or offensive keywords (this is a simple example, you can expand this list)
  const offensiveWords = ["badword1", "badword2", "offensiveword"];

  const validateInput = (input) => {
    const regex = new RegExp(`\\b(${offensiveWords.join('|')})\\b`, 'i');
    if (regex.test(input)) {
      setError('Your input contains offensive language. Please remove it.');
    } else {
      setError('');
    }
  };

  const handleSubmit = () => {
    if (!error) {
      // Proceed with form submission
      console.log('Form submitted:', text);
    } else {
      console.log('Form contains errors.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={text}
        onChangeText={(input) => {
          setText(input);
          validateInput(input);
        }}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default MyFormattedTextInput;
