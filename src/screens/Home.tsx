import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';
import Pages from '../data/Pages';

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
            {Pages.map((page: any, index: number) => (
              <Button
                key={index}
                title={page.title}
                onPress={() => nav.navigate(page.navigateTo as never)}
              />
            ))}
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
