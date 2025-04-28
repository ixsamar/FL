import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AppStackParamList} from './types';
import {View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useFont, useTheme} from '../Utils/Globles';
import IconF from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Main Screens
import Drawer from '../Layout/Drawer';
import Home from '../Screens/Main/Home';
import Chats from '../Screens/Main/Chats';
import Post from '../Screens/Main/Post';
import Search from '../Screens/Main/Search';
import Settings from '../Screens/Main/Settings';

//Stack Screens
import Splash from '../Screens/Auth/Splash';
import Login from '../Screens/Auth/Login';
import Languages from '../Components/Languages';
import Chat from '../Components/Chat';
import {COLORS} from '../Utils/Colors';
import Notification from '../Screens/Project/NotChat/Notification';

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
        <Stack.Screen name="Languages" component={Languages} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Notification" component={Notification} />
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
const BottomTabHandler = () => {
  const {themeColors} = useTheme();
  const {FONT_SIZE} = useFont();

  const TabBarIcon = (iconName: string, focused: boolean) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: focused ? COLORS.MintGreen : 'transparent',
        borderRadius: hp('1.5%'),
        height: hp('3.2%'),
        width: hp('5.5%'),
      }}>
      <IconF name={iconName} size={hp('2.3%')} color={COLORS.DarkBlack} />
    </View>
  );

  const screens = [
    {name: 'Home', component: Home, icon: 'home'},
    {name: 'Chats', component: Chats, icon: 'message-circle'},
    {name: 'Post', component: Post, icon: 'plus-square'},
    {name: 'Search', component: Search, icon: 'search'},
    {name: 'Settings', component: Settings, icon: 'settings'},
  ];

  return (
    <BottomStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: themeColors.backGroundColor,
          height: hp('8.7%'),
        },
        tabBarActiveTintColor: COLORS.MintGreen,
        tabBarInactiveTintColor: COLORS.DarkBlack,
        tabBarLabelStyle: {
          fontSize: FONT_SIZE.F_14,
          color: COLORS.DarkBlack,
          paddingTop: hp('0.5%'),
        },
      }}>
      {screens.map(({name, component, icon}) => (
        <BottomStack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({focused}) => TabBarIcon(icon, focused),
          }}
        />
      ))}
    </BottomStack.Navigator>
  );
};

export default Routes;
