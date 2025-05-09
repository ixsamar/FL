import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AppStackParamList} from './types';
import {Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FONT, useFont, useTheme} from '../Utils/Globles';
import IconF from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Main Screens
// import Drawer from '../Layout/Drawer';
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
import Notification from '../Screens/Project/Notification';
import Profile from '../Screens/Project/Profile';
import MyLocation from '../Screens/Project/MyLocation';

const Stack = createNativeStackNavigator<AppStackParamList>();
// const DrawerStack = createDrawerNavigator<AppStackParamList>();
const BottomStack = createBottomTabNavigator<AppStackParamList>();

//Stack Navigation
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer" component={BottomTabHandler} />
        <Stack.Screen name="Languages" component={Languages} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          // options={{
          //   presentation: 'modal',
          //   animation: 'slide_from_top',
          // }}
        />
        <Stack.Screen name="MyLocation" component={MyLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//Drawer Navigation
// const DrawerTabHand = () => {
//   const {themeColors} = useTheme();
//   return (
//     <DrawerStack.Navigator
//       screenOptions={{
//         headerShown: false,
//         drawerStyle: {
//           width: wp('100%'),
//         },
//       }}
//       drawerContent={props => (
//         <>
//           <Drawer {...props} />
//         </>
//       )}>
//       <DrawerStack.Screen name="HomeMain" component={BottomTabHandler} />
//     </DrawerStack.Navigator>
//   );
// };

//Bottom Navigation
const BottomTabHandler = () => {
  const {themeColors} = useTheme();
  const {FONT_SIZE} = useFont();

  const unreadChats = 4;

  const TabBarIcon = (
    iconName: string,
    focused: boolean,
    badgeCount: number = 0,
  ) => (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
        {badgeCount > 0 && (
          <View
            style={{
              position: 'absolute',
              top: -hp('0.2%'),
              right: -hp('0.5%'),
              backgroundColor: COLORS.OceanBlue,
              borderRadius: hp('1%'),
              minWidth: hp('2%'),
              height: hp('2%'),
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 2,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: FONT_SIZE.F_12,
                fontFamily: FONT.MEDIUM,
              }}>
              {badgeCount > 9 ? '9+' : badgeCount}
            </Text>
          </View>
        )}
      </View>
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
      {/* {screens.map(({name, component, icon}) => (
        <BottomStack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({focused}) => TabBarIcon(icon, focused),
          }}
        />
      ))} */}

      {screens.map(({name, component, icon}) => {
        const badgeCount = name === 'Chats' ? unreadChats : 0;

        return (
          <BottomStack.Screen
            key={name}
            name={name}
            component={component}
            options={{
              tabBarIcon: ({focused}) => TabBarIcon(icon, focused, badgeCount),
            }}
          />
        );
      })}
    </BottomStack.Navigator>
  );
};

export default Routes;
