import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AppStackParamList} from './types';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useTheme} from '../Utils/Globles';

//Screens
import Drawer from '../Layout/Drawer';
import Home from '../Screens/Main/Home';
import Chats from '../Screens/Main/Home';
import Post from '../Screens/Main/Post';
import Search from '../Screens/Main/Search';
import Settings from '../Screens/Main/Settings';

import Splash from '../Screens/Auth/Splash';
import Login from '../Screens/Auth/Login';

const Stack = createNativeStackNavigator<AppStackParamList>();
const DrawerStack = createDrawerNavigator<AppStackParamList>();
const BottomStack = createBottomTabNavigator<AppStackParamList>();

//Stack Navigation
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Drawer" component={DrawerTabHand} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//Drawer Navigation
const DrawerTabHand = () => {
  const {themeColors} = useTheme();
  return (
    <DrawerStack.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: wp('100%'),
        },
      }}
      drawerContent={props => (
        <>
          <Drawer {...props} />
        </>
      )}>
      <DrawerStack.Screen name="HomeMain" component={BottomTabHandler} />
    </DrawerStack.Navigator>
  );
};

//Bottom Navigation
const BottomTabHandler = (props: any) => {
  const {themeColors} = useTheme();

  return (
    <BottomStack.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: themeColors.themeColor,
        tabBarInactiveTintColor: '#959594',
        flex: 1,
      })}>
      <BottomStack.Screen name={'Home'} component={Home} />
      <BottomStack.Screen name={'Search'} component={Search} />
      <BottomStack.Screen name={'Post'} component={Post} />
      <BottomStack.Screen name={'Chats'} component={Chats} />
      <BottomStack.Screen name={'Settings'} component={Settings} />
    </BottomStack.Navigator>
  );
};

export default Routes;
