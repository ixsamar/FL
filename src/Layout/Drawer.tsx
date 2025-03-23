import React from 'react';
import {useTheme} from '../Utils/Globles';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Drawer = (props: any) => {
  const {themeColors} = useTheme();
  const navigation = props?.navigation || useNavigation();

  return (
    <View style={[styles.container, {backgroundColor: themeColors.themeColor}]}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.closeDrawer()}>
        <Text style={[styles.menuText, {color: themeColors.textColor}]}>
          Back
        </Text>
      </TouchableOpacity>

      <View style={styles.menuContainer}>
        <Text style={[styles.menuText, {color: themeColors.textColor}]}>
          I am Drawer
        </Text>
      </View>
    </View>
  );
};

const menuItems = [
  {label: 'Home', screen: 'Home'},
  {label: 'Settings', screen: 'Settings'},
];

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  menuContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
