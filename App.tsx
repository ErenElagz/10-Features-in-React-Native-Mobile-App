import {StatusBar, View} from 'react-native';
import React from 'react';
import RootNavigator from './src/navigators/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
}
