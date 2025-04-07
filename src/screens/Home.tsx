import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const nav = useNavigation();
  
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <ScrollView>
            <Text style={styles.author}>ErenElagz</Text>
          <Text style={styles.text}>
            10 Functions of the Android Mobile App
          </Text>
          <View style={{marginTop: 20, gap: 8}}>
            <Button
              title="QR Scanner"
              onPress={() => nav.navigate('QR' as never)}
            />
            <Button
              title="Take Picture"
              onPress={() => nav.navigate('Camera' as never)}
            />
            <Button
              title="Location Services"
              onPress={() => nav.navigate('Location' as never)}
            />
            <Button
              title="AI Based ChatBot"
              onPress={() => nav.navigate('ChatBot' as never)}
            />
            <Button
              title="Localization (Multiple Languages)"
              onPress={() => nav.navigate('Localization' as never)}
            />
            <Button
              title="Notifications Services"
              onPress={() => nav.navigate('Notification' as never)}
            />
            <Button
              title="Dark and Light Theme"
              onPress={() => nav.navigate('Theme' as never)}
            />
            <Button
              title="Android ShareSheet"
              onPress={() => nav.navigate('Share' as never)}
            />
            <Button
              title="Biometric Authentication"
              onPress={() => nav.navigate('Auth' as never)}
            />
            <Button
              title="Local Storage (To-Do App Example)"
              onPress={() => nav.navigate('ToDo' as never)}
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
