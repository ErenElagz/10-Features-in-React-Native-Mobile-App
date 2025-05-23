import {StyleSheet, Text, View, Share} from 'react-native';
import React from 'react';
import Pages from '../../data/Pages';
import CustomButton from '../../components/Button';

export default function ShareSheetScreen() {
  const share = async () => {
    try {
      const result = await Share.share({
        message: 'This is a sample message to share with other applications.',
        title: 'Share Example',
        url: 'https://example.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.function}>Function {Pages[7].index}</Text>
        <Text style={styles.title}>{Pages[7].title}</Text>
        <Text style={styles.description}>{Pages[7].description}</Text>
      </View>
      <View>
        <CustomButton title="Share" onPress={share} />
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
