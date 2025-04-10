import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Pages from '../../data/Pages';
import ReactNativeBiometrics, {BiometryType} from 'react-native-biometrics';
import CustomButton from '../../components/Button';

export default function AuthScreen() {
  const [biometricType, setBiometricType] = useState<BiometryType | null | undefined>(null);
  const [biometricAvailable, setBiometricAvailable] = useState(false);
  const [authSuccessful, setAuthSuccessful] = useState(false);
  const rnBiometrics = new ReactNativeBiometrics();
  useEffect(() => {
    checkBiometrics();
  }, []);

  const checkBiometrics = async () => {
    const {available, biometryType} = await rnBiometrics.isSensorAvailable();
    if (available) {
      setBiometricAvailable(true);
      setBiometricType(biometryType);
      Alert.alert(
        'Biometric Authentication Available',
        `This device supports ${biometryType} authentication.`,
      );
    } else {
      setBiometricAvailable(false);
      Alert.alert(
        'Biometric Authentication Unavailable',
        'This device does not support biometric authentication.',
      );
    }
  };

  const handleBiometricAuth = async () => {
    if (!biometricAvailable) {
      Alert.alert(
        'Biometric Authentication Unavailable',
        'This device does not support biometric authentication.',
      );
      return;
    }
    
    const result = await rnBiometrics.simplePrompt({
      promptMessage: 'Biometric Authentication',
      cancelButtonText: 'Close',
    });
    if (result && result.success) {
      setAuthSuccessful(true);
      Alert.alert('Success', 'Biometric Authentication Successful!');
    } else {
      setAuthSuccessful(false);
      Alert.alert('Failed', 'Biometric Authentication Failed!');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.function}>Function {Pages[8].index}</Text>
        <Text style={styles.title}>{Pages[8].title}</Text>
        <Text style={styles.description}>{Pages[8].description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {biometricAvailable ? (
          <CustomButton
            title={`Start Biometric Authentication (${biometricType})`}
            onPress={handleBiometricAuth}
          />
        ) : (
          <Text>Biometric authentication is not available on this device.</Text>
        )}
        {authSuccessful && (
          <Text style={styles.successText}>Biometric Authentication Successful!</Text>
        )}
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
  buttonContainer: {
    marginTop: 32,
  },
  successText: {
    marginTop: 16,
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
