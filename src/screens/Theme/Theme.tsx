import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Pages from '../../data/Pages';

export default function CameraScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.function}>Function {Pages[6].index}</Text>
        <Text style={styles.title}>{Pages[6].title}</Text>
        <Text style={styles.description}>{Pages[6].description}</Text>
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
  },
  function: {
    fontSize: 24,
    color: '#234897',
    letterSpacing: -0.5,
    fontWeight: 'bold',
  },
});
