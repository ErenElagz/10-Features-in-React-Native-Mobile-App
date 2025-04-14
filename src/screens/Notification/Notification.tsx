import {StyleSheet, Text, View, Platform} from 'react-native';
import React, {useEffect} from 'react';
import Pages from '../../data/Pages';
import CustomButton from '../../components/Button';
import PushNotification from 'react-native-push-notification';

export default function CameraScreen() {
  useEffect(() => {
    createChannel();
  }, []);

  const createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'local-notification', // Required
        channelName: 'Local Notification Channel', // Required
        channelDescription: 'A channel to categorise your local notifications', // Optional
        importance: 4, // (optional) default: 3. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      created => console.log(`createChannel returned '${created}'`), // Callback function
    );
  };

  const handleSendNotification = () => {
    PushNotification.localNotification({
      channelId: 'local-notification', // (required) channelId for Android
      title: 'Local Notification', // (optional)
      message: 'This is local notification', // (required)
      bigText: 'This is long local notification. You can add more.', // (optional) default: null
      color: 'red', // (optional) default: white
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      priority: 'high', // (optional) set notification priority, default: high
      playSound: true, // (optional) default: true
      soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound (Android only) by adding it to /res/raw.
      // actions: ['Yanıtla', 'Görüntüle'], // (Android only) add action buttons
      // invokeApp: true, // (optional) default: true. If the notification is tapped while the app is closed or in the background, the app will be opened.
      // You can add more options based on your needs
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.function}>Function {Pages[5].index}</Text>
        <Text style={styles.title}>{Pages[5].title}</Text>
        <Text style={styles.description}>{Pages[5].description}</Text>
      </View>
      <CustomButton
        title="Send Notification"
        onPress={handleSendNotification}
        style={{marginTop: 16}}
      />
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
