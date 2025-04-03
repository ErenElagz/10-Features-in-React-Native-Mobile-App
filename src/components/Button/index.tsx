import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

Button.defaultProps = {
  title: String,
  onPress: () => {},
};

export default function Button() {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Text style={styles.text}>Button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#323232',
    padding: 16,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});
