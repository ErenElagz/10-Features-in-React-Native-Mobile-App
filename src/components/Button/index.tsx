import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  style?: object;
  isDone?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  isDone,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.button, isDone && {backgroundColor: 'green'}, style]}
      onPress={onPress}
      {...style}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'darkblue',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomButton;
