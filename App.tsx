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
          <View style={{marginTop: 20, gap: 8}}>
            <Button title="QR Scanner" navigateTo="Function1" />
            <Button title="Take Picture" navigateTo="Function1" />
            <Button title="Location Services" navigateTo="Function1" />
            <Button title="AI Based ChatBot" navigateTo="Function1" />
            <Button
              title="Localization (Multiple Languages)"
              navigateTo="Function1"
            />
            <Button title="Notifications Services" navigateTo="Function1" />
            <Button title="Dark and Light Theme" navigateTo="Function1" />
            <Button title="Android ShareSheet" navigateTo="Function1" />
            <Button title="Biometric Authentication" navigateTo="Function1" />
            <Button
              title="Local Storage (To-Do App Example)"
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
