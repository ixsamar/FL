import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {COLORS} from '../../../Utils/Colors';
import {useFont, useTheme} from '../../../Utils/Globles';
// import IconA from "react-native-vector-icons/AntDesign";
// import IconI from "react-native-vector-icons/Ionicons";
// import IconsFA from "react-native-vector-icons/FontAwesome";
// import IconsEN from "react-native-vector-icons/Entypo";
// import {COLORS} from '../../Utils/Colors';
// import {useFont, useTheme} from '../../Utils/Globles';

const TopHeader = ({
  goBack,
  screenName,
  showSearch,
  searchHandilor,
  searchText = '',
  setSearchText,
  inputPlaceholder = 'Search Here',
  showOptions,
  optionsHandilor = () => {},
  isShare,
}: {
  goBack?: boolean;
  screenName?: string;
  showSearch?: boolean;
  searchHandilor?: any;
  searchText?: string;
  setSearchText?: any;
  inputPlaceholder?: string;
  showOptions?: boolean;
  optionsHandilor?: any;
  isShare: boolean;
}) => {
  const navigation = useNavigation();

  const backHandler = () => {
    navigation.goBack();
  };

  const [searchFlag, setSearchFlag] = useState(false);

  const {FONT_SIZE} = useFont();
  const {themeColors} = useTheme();

  const shareHandilor = () => {
    console.log('share clicked');
  };

  return (
    <View>
      <>
        <View style={styles.headerContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {/* Back */}
            <>
              {goBack && (
                <TouchableOpacity
                  onPress={backHandler}
                  style={{alignSelf: 'center'}}>
                  {/* <IconI
                    size={hp("2.8%")}
                    name="arrow-back-outline"
                    color={themeColors.textColor}
                  /> */}
                  <Text>{'<-- '}</Text>
                </TouchableOpacity>
              )}
            </>

            {/* Name */}
            <>
              {screenName && (
                <Text
                  style={[
                    styles.headerText,
                    {fontSize: FONT_SIZE.F_20, color: themeColors.textColor},
                  ]}>
                  {screenName || '-'}
                </Text>
              )}
            </>
          </View>

          <View style={styles.headerIcons}>
            {/* Search */}
            <>
              {showSearch && (
                <TouchableOpacity
                  onPress={() => setSearchFlag(!searchFlag)}
                  style={styles.searchIcon}>
                  {/* <IconsFA
                    name={'search'}
                    size={20}
                    color={themeColors.textColor}
                  /> */}
                  <Text>{'Search'}</Text>
                </TouchableOpacity>
              )}
            </>

            {/* Share */}
            <>
              {isShare && (
                <TouchableOpacity
                  onPress={shareHandilor}
                  style={styles.searchIcon}>
                  {/* <IconsFA
                    name={'share'}
                    size={20}
                    color={themeColors.textColor}
                  /> */}
                  <Text>Icon</Text>
                </TouchableOpacity>
              )}
            </>

            {/* Share */}
            <>
              {isShare && (
                <TouchableOpacity
                  onPress={shareHandilor}
                  style={styles.searchIcon}>
                  {/* <IconsI
                    name={"location"}
                    size={20}
                    color={themeColors.textColor}
                  /> */}
                </TouchableOpacity>
              )}
            </>

            {/* Options */}
            <>
              {showOptions && (
                <TouchableOpacity>
                  {/* <IconsEN name={'dots-three-vertical'} size={20} /> */}
                  <Text>Icon</Text>
                </TouchableOpacity>
              )}
            </>
          </View>
        </View>

        <>
          {searchFlag && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.searchBox}>
                <TextInput
                  value={searchText}
                  onChangeText={value => setSearchText(value)}
                  placeholder={inputPlaceholder}
                  style={[styles.searchInput, {color: themeColors.textColor}]}
                  placeholderTextColor={COLORS.DarkGray}
                />

                <>
                  <TouchableOpacity
                    onPress={() => {
                      setSearchText('');
                    }}
                    style={styles.clearButton}>
                    {/* <IconA size={hp('2%')} name="closecircleo" color={'#ccc'} /> */}
                    <Text>Icon</Text>
                  </TouchableOpacity>
                </>
              </View>
            </View>
          )}
        </>
      </>
    </View>
  );
};

export default TopHeader;
