import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
