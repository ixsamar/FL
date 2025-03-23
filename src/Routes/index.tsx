import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList} from './types';

//Screens
import Splash from '../Screens/Auth/Splash';
import Login from '../Screens/Auth/Login';
import Home from '../Screens/Main/Home';
import Settings from '../Screens/Main/Settings';

const Stack = createNativeStackNavigator<AppStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
