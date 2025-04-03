import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import Button from './src/components/Button';
export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <ScrollView>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <Text style={styles.author}>ErenElagz</Text>
          <Text style={styles.text}>
            10 Functions of the Android Mobile App
          </Text>
          <View>
            <Button
              title="Function 1"
              navigateTo="Function1"
            />
          </View>
        </ScrollView>
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
