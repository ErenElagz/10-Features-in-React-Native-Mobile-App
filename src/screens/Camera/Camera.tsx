import {View, StyleSheet, Alert, Platform, Text, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Pages from '../../data/Pages';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/Button';

export default function QrScreen() {
  const [photoPath, setPhotoPath] = useState<string | null>(null);
  const nav = useNavigation();
  const devices = useCameraDevice('back');
  const camera = useRef<Camera>(null);

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
    }
  };

  useEffect(() => {
    checkCameraPermission();
  }, []);

  const takePhoto = async () => {
    if (camera.current == null) return;
    try {
      const photo = await camera.current.takePhoto({
        flash: 'auto',
      });
      setPhotoPath(photo.path);
    } catch (e) {
      Alert.alert('Error', 'Failed to take photo');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.function}>Function {Pages[1].index}</Text>
        <Text style={styles.title}>{Pages[1].title}</Text>
        <Text style={styles.description}>{Pages[1].description}</Text>
      </View>

      <View style={styles.cameraContainer}>
        {devices && (
          <Camera
            style={StyleSheet.absoluteFill}
            device={devices}
            isActive={true}
            photo={true}
            ref={camera}
          />
        )}
      </View>

      <CustomButton title="Take a Picture" onPress={takePhoto} />

      {photoPath && (
        <View style={styles.previewContainer}>
          <Image
            source={{uri: 'file://' + photoPath}}
            style={styles.previewImage}
            resizeMode="contain"
          />
        </View>
      )}
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
  cameraContainer: {
    width: '100%',
    height: 300,
    marginTop: 16,
    borderRadius: 32,
    marginBottom: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  previewContainer: {
    width: '100%',
    height: 300,
    marginTop: 16,
    borderRadius: 32,
    marginBottom: 16,
    overflow: 'hidden',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
});
