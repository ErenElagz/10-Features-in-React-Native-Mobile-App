import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React from 'react';

export default function ShareSheetScreen() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.author}>Function 8</Text>
        <Text style={styles.text}>Share Document with Other Apps</Text>
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
