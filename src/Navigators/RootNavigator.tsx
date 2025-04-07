import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import CameraScreen from '../screens/Camera/Camera';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
}
