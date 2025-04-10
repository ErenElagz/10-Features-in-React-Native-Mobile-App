import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Pages from '../../data/Pages';

export default function ChatbotScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.function}>Function {Pages[3].index}</Text>
        <Text style={styles.title}>{Pages[3].title}</Text>
        <Text style={styles.description}>{Pages[3].description}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginTop: 8,
    color: '#000',
    letterSpacing: -0.75,
  },
  description: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 16,
  },
  function: {
    fontSize: 24,
    color: 'darkblue',
    letterSpacing: -0.5,
    fontWeight: 'bold',
  },
});
