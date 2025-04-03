import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type CustomButtonProps = {
  title: string;
  navigateTo: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({title, navigateTo}) => {
  const navigation = useNavigation();
  const handlePress = () => {
      navigation.navigate(navigateTo);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});

export default CustomButton;
