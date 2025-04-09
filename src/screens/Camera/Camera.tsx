import {View, StyleSheet, Alert, Platform, Text} from 'react-native';
import React, {useEffect} from 'react';
import Pages from '../../data/Pages';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {useNavigation} from '@react-navigation/native';

export default function QrScreen() {
  const checkCameraPermission = async () => {
    const result = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    );

    switch (result) {
      case RESULTS.GRANTED:
        break;
      case RESULTS.DENIED:
        Alert.alert(
          'Camera Permission',
          'Camera permission is required to scan QR codes.',
        );
        break;
      case RESULTS.BLOCKED:
        Alert.alert(
          'Camera Permission',
          'Camera permission is blocked. Please enable it from settings.',
        );
        break;
      default:
        Alert.alert(
          'Camera Permission',
          'Camera permission is required to scan QR codes.',
        );
    }
  };
  useEffect(() => {
    checkCameraPermission();
  }, []);

  const nav = useNavigation();
  const devices = useCameraDevice('back');

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.function}>Function {Pages[1].index}</Text>
        <Text style={styles.title}>{Pages[1].title}</Text>
        <Text style={styles.description}>{Pages[1].description}</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 400,
          marginTop: 16,
          borderRadius: 32,
          overflow: 'hidden',
        }}>
        {devices && (
          <Camera style={styles.camera} device={devices} isActive={true} />
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
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  qrCodeText: {
    fontSize: 24,
    color: '#000',
    marginTop: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
