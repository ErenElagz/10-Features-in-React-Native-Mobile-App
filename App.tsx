import {View} from 'react-native';
import React from 'react';
import RootNavigator from './src/Navigators/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
}
