import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {Menu, Favourit, Search, Pulse} from '../../Utils/Svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {images} from '../../Utils/Images';
import {headerBgImages, themeColorsUtils} from '../../Utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {AppStackParamList} from '../../Routes/types';
import {FONT, useTheme, useFont} from '../../Utils/Globles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation<DrawerNavigationProp<AppStackParamList>>();

  const {FONT_SIZE} = useFont();
  const menuIconHandilor = () => {
    navigation.openDrawer();
  };

  const {themeColors} = useTheme();

  const themeIndex = themeColorsUtils.indexOf(themeColors.themeColor);

  return (
    <ImageBackground source={headerBgImages[themeIndex]}>
      <ImageBackground
        style={[styles.headerContainer, {paddingTop: StatusBar.currentHeight}]}
        source={images.AppBar}>
        <StatusBar backgroundColor={'rgba(0,0,0,0)'} />
        <SafeAreaView />
        <View style={styles.headerMenuSearchIconsContainer}>
          <TouchableOpacity onPress={menuIconHandilor}>
            <Menu height={hp('2.5%')} width={wp('10%')} />
          </TouchableOpacity>
          <View style={styles.searchFavouritPilsContainer}>
            <TouchableOpacity>
              <Search height={hp('2.5%')} width={wp('5%')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.pulseIconContainer}>
              <Pulse height={hp('2.5%')} width={wp('10%')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Favourit height={hp('2.5%')} width={wp('6%')} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.settingsContainer}>
          <Text style={[styles.settingsTitle, {fontSize: FONT_SIZE.F_21}]}>
            {title}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: hp('1%'),
  },
  headerMenuSearchIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1%'),
  },
  searchFavouritPilsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pulseIconContainer: {
    marginHorizontal: hp('1%'),
  },
  settingsContainer: {
    marginBottom: hp('1.5%'),
  },
  settingsTitle: {
    color: '#fff',
    fontFamily: FONT.BOLD,
    textAlign: 'left',
  },
});

export default Header;
