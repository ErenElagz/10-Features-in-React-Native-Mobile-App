import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Pages from '../data/Pages';
import CustomButton from '../components/Button';

export default function HomeScreen() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          <Text style={styles.author}>ErenElagz</Text>
          <Text style={styles.text}>
            10 Functions of the Android Mobile App
          </Text>
          <View style={{marginTop: 20, gap: 8}}>
            {Pages.map((page: any, index: number) => (
              <CustomButton
                key={index}
                title={page.title}
                isDone={page.isDone}
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
