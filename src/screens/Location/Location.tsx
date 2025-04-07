import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React from 'react';

export default function LocationScreen() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.author}>Function 3</Text>
        <Text style={styles.text}>Location Service</Text>
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
  text: {
    fontSize: 28,
    color: '#000',
    letterSpacing: -0.75,
  },
  author: {
    fontSize: 24,
    color: '#234897',
    letterSpacing: -0.5,
    fontWeight: 'bold',
  },
});
