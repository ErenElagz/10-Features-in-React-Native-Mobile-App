import {View} from 'react-native';
import React from 'react';
import RootNavigator from './src/Navigators/RootNavigator';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <RootNavigator />
    </View>
  );
}
