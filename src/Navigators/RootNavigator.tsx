import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home';
import CameraScreen from '../screens/Camera/Camera';
import QrScreen from '../screens/QR/QR';
import ToDoScreen from '../screens/ToDo/ToDo';
import LocationScreen from '../screens/Location/Location';
import ChatBotScreen from '../screens/ChatBot/ChatBot';
import ShareScreen from '../screens/ShareSheet/ShareSheet';
import NotificationScreen from '../screens/Notification/Notification';
import ThemeScreen from '../screens/Theme/Theme';
import AuthScreen from '../screens/Auth/Auth';
import LocalizationScreen from '../screens/Localization/Localization';

const Stack = createStackNavigator();
export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="QR" component={QrScreen} />
      <Stack.Screen name="ToDo" component={ToDoScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="ChatBot" component={ChatBotScreen} />
      <Stack.Screen name="Share" component={ShareScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Theme" component={ThemeScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Localization" component={LocalizationScreen} />
    </Stack.Navigator>
  );
}
