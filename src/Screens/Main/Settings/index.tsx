import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  I18nManager,
  ScrollView,
  Linking,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import {styles} from './styles';
import {changeLanguageMode} from './Common';
import {COLORS} from '../../../Utils/Colors';
import {AppStackParamList} from '../../../Routes/types';
import {ArrowRight} from '../../../Utils/Svg';
import {useTheme, useFont} from '../../../Utils/Globles';
import {setIsDarkMode} from '../../../Store/AppSlices/mainSlice';
import {useAppDispatch, useAppSelector} from '../../../Store/store';
import Header from '../../../Components/Header';
import {getLanguage} from '../../../Utils/CommonUtils';

type SettingsProps = NativeStackScreenProps<AppStackParamList, 'Settings'>;

const Settings: React.FC<SettingsProps> = ({navigation}) => {
  const language = getLanguage();

  const commonLabels = {
    EN: {
      UI_LABELS: {
        SETTINGS: 'Settings',
      },
    },
    TE: {
      UI_LABELS: {
        SETTINGS: 'సెట్టింగ్‌లు',
      },
    },
    ML: {
      UI_LABELS: {
        SETTINGS: 'സജ്ജീകരണങ്ങൾ',
      },
    },
    HI: {
      UI_LABELS: {
        SETTINGS: 'सेटिंग्स',
      },
    },
    AR: {
      UI_LABELS: {
        SETTINGS: 'الإعدادات',
      },
    },
  };

  // console.log('---->', commonLabels?.['EN']?.UI_LABELS?.SETTINGS || 'Settings');

  // const {data: commonLabels} = useLoginConfigurationQuery();

  const isDarkMode = useAppSelector(state => state.mainStore.isDarkMode);
  const dispatch = useAppDispatch();

  //Global Color Setting
  const handleGlobalColors = async (
    themeColor: string,
    backGround: string,
    primaryColor: string,
    headerTextColor: string,
    titleTextColor: string,
    subtitleTextColor: string,
    textColor: string,
    isDarkMode: boolean,
    themeText: string,
  ) => {
    const globalThemeColors = {
      themeColor,
      backGroundColor: backGround,
      primaryColor,
      headerTextColor,
      titleTextColor,
      subtitleTextColor,
      textColor,
      isDarkMode,
      themeText,
    };

    updateColor(globalThemeColors, 'themeColorsGlobal');
  };

  //Global Color Getting
  const {
    themeColor,
    backGroundColor,
    primaryColor,
    headerTextColor,
    titleTextColor,
    subtitleTextColor,
    themeColors,
    updateColor,
  } = useTheme();

  //Global Font-Size Setting
  const {updateFont, FONT_SIZE} = useFont();
  const [selectedFontSize, setSelectedFontSize] = useState(20);

  useEffect(() => {
    const handleGlobalFont = async () => {
      let fontCode = '';
      if (selectedFontSize === 10) {
        fontCode = '-0.2';
      } else if (selectedFontSize === 30) {
        fontCode = '0.2';
      } else {
        fontCode = '0';
      }
      updateFont(fontCode, 'headerFont');
    };

    handleGlobalFont();
  }, [selectedFontSize, updateFont]);

  //Notification
  const [notificationOn, setNotificationMode] = useState(false);

  const toggleNotificationSwitch = () => {
    setNotificationMode(notificationOn => !notificationOn);
  };

  // Dark & Light Mode
  const changeThemeMode = async () => {
    await AsyncStorage.setItem(
      'isDarkMode',
      themeColors.isDarkMode ? 'light' : 'dark',
    );
    dispatch(setIsDarkMode(themeColors.isDarkMode ? 'light' : 'dark'));

    if (themeColors.isDarkMode) {
      handleGlobalColors(
        '#B68A35',
        '#EFEFEF',
        '#fff',

        'black',
        '#000000',
        '#EFEFEF',
        '#000000',
        false,
        '#B68A35',
      );
    } else {
      handleGlobalColors(
        '#28282B',
        '#303030',
        '#424242',

        '#FFFFFF',
        '#000000',
        '#EFEFEF',
        '#FFFFFF',
        true,
        '#FFFFFF',
      );
    }
  };

  return (
    <View style={[styles.settingsContainer]}>
      <Header
        title={commonLabels?.[language]?.UI_LABELS?.SETTINGS || 'Setting'}
      />
      <ScrollView
        contentContainerStyle={styles.settingsBodyContainer}
        style={{backgroundColor: backGroundColor}}>
        {/* Accessibility */}
        <>
          <Animatable.View
            style={{marginHorizontal: hp('0.5%')}}
            animation="bounceInLeft"
            iterationCount={1}
            duration={1500}>
            <TouchableOpacity
              onPress={() => {
                Linking.openSettings();
              }}
              style={[
                styles.accessibilityAndDashboardContainer,
                styles.shadow,
                {backgroundColor: primaryColor, marginTop: hp('2.3%')},
              ]}>
              <View>
                <Text
                  style={[
                    styles.fontStyle,
                    {color: headerTextColor, fontSize: FONT_SIZE.F_14},
                  ]}>
                  {commonLabels?.[language]?.UI_LABELS?.ACCESSBILITY ||
                    'Accessibility'}
                </Text>
              </View>
              <View
                style={{
                  transform: [{scaleX: I18nManager.isRTL === true ? -1 : 1}],
                }}>
                <ArrowRight height={hp('2%')} width={wp('3%')} />
              </View>
            </TouchableOpacity>
          </Animatable.View>
        </>

        {/* Customize my dashboard */}
        <>
          <Animatable.View
            style={{marginHorizontal: hp('0.5%')}}
            animation="bounceInLeft"
            iterationCount={1}
            delay={35}
            duration={1500}>
            <TouchableOpacity
              // onPress={() => {
              //   addPassToWallet();
              // }}
              style={[
                styles.accessibilityAndDashboardContainer,
                styles.shadow,
                {backgroundColor: primaryColor},
              ]}>
              <View>
                <Text
                  style={[
                    styles.fontStyle,
                    {
                      color: themeColors.headerTextColor,
                      fontSize: FONT_SIZE.F_14,
                    },
                  ]}>
                  {commonLabels?.[language]?.UI_LABELS
                    ?.CUSTOMIZE_MY_DASHBOARD || 'Customize my dashboard'}
                </Text>
              </View>
              <View
                style={{
                  transform: [{scaleX: I18nManager.isRTL === true ? -1 : 1}],
                }}>
                <ArrowRight height={hp('2%')} width={wp('3%')} />
              </View>
            </TouchableOpacity>
          </Animatable.View>
        </>

        {/* Language */}
        <>
          <Animatable.View
            style={{marginHorizontal: hp('0.5%')}}
            animation="bounceInLeft"
            iterationCount={1}
            delay={35 * 2}
            duration={1500}>
            <TouchableOpacity
              onPress={changeLanguageMode}
              style={[
                styles.accessibilityAndDashboardContainer,
                styles.shadow,
                {backgroundColor: primaryColor},
              ]}>
              <Text
                style={[
                  styles.fontStyle,
                  {color: headerTextColor, fontSize: FONT_SIZE.F_14},
                ]}>
                {commonLabels?.[language]?.UI_LABELS?.LANGUAGE || 'Language'}
              </Text>

              <Text
                style={[
                  styles.fontStyle,
                  {color: headerTextColor, fontSize: FONT_SIZE.F_14},
                ]}>
                {I18nManager.isRTL === false ? '    عربی' : 'English'}
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </>

        {/* Theams */}
        <>
          <Animatable.View
            style={{marginHorizontal: hp('0.5%')}}
            animation="bounceInLeft"
            iterationCount={1}
            delay={40 * 4}
            duration={1500}>
            <View
              style={[
                styles.modeNotificationsContainer,
                styles.shadow,
                {backgroundColor: primaryColor},
              ]}>
              <View>
                <Text
                  style={[
                    styles.fontStyle,
                    {color: headerTextColor, fontSize: FONT_SIZE.F_14},
                  ]}>
                  {commonLabels?.[language]?.UI_LABELS?.DARK_MODE ||
                    'Dark Mode'}
                </Text>
              </View>
              <View style={{transform: [{scale: 0.8}]}}>
                <Switch
                  trackColor={{false: backGroundColor, true: themeColor}}
                  thumbColor="#fff"
                  ios_backgroundColor={
                    isDarkMode === 'light' ? backGroundColor : primaryColor
                  }
                  value={themeColors.isDarkMode}
                  onValueChange={changeThemeMode}
                />
              </View>
            </View>
          </Animatable.View>
        </>

        {/* Notification */}
        <>
          <Animatable.View
            style={{marginHorizontal: hp('0.5%')}}
            animation="bounceInLeft"
            iterationCount={1}
            delay={40 * 5}
            duration={1500}>
            <View
              style={[
                styles.modeNotificationsContainer,
                styles.shadow,
                {backgroundColor: primaryColor},
              ]}>
              <View>
                <Text
                  style={[
                    styles.fontStyle,
                    {
                      color: headerTextColor,
                      fontSize: FONT_SIZE.F_14,
                    },
                  ]}>
                  {commonLabels?.[language]?.UI_LABELS?.NOTIFICATION ||
                    'Notification'}
                </Text>
              </View>
              <View style={{transform: [{scale: 0.8}]}}>
                <Switch
                  trackColor={{false: backGroundColor, true: themeColor}}
                  thumbColor="#fff"
                  ios_backgroundColor={
                    isDarkMode === 'light' ? backGroundColor : primaryColor
                  }
                  value={notificationOn}
                  onValueChange={toggleNotificationSwitch}
                />
              </View>
            </View>
          </Animatable.View>
        </>

        {/* Font Size */}
        <>
          <Animatable.View
            style={{marginHorizontal: hp('0.5%')}}
            animation="bounceInLeft"
            iterationCount={1}
            delay={50 * 6}
            duration={1500}>
            <View
              style={[
                styles.fontSizeContainer,
                styles.shadow,
                {backgroundColor: primaryColor},
              ]}>
              <View>
                <Text
                  style={[
                    styles.fontStyle,
                    {
                      color: headerTextColor,
                      textAlign: 'left',
                      fontSize: FONT_SIZE.F_14,
                    },
                  ]}>
                  {commonLabels?.[language]?.UI_LABELS?.FONT_SIZE ||
                    'Font Size'}
                </Text>

                <View style={styles.sliderContainer}>
                  <Slider
                    minimumValue={10}
                    maximumValue={30}
                    value={selectedFontSize}
                    onSlidingComplete={slideValue => {
                      if (slideValue >= 15 && slideValue < 25) {
                        setSelectedFontSize(slideValue);
                        setTimeout(() => {
                          setSelectedFontSize(20);
                        }, 100);
                      } else if (slideValue >= 25) {
                        setSelectedFontSize(slideValue);
                        setTimeout(() => {
                          setSelectedFontSize(30);
                        }, 100);
                      } else if (slideValue < 15) {
                        setSelectedFontSize(slideValue);
                        setTimeout(() => {
                          setSelectedFontSize(10);
                        }, 100);
                      }
                    }}
                    minimumTrackTintColor={
                      themeColor === '#28282B' ? COLORS.SilverGray : themeColor
                    }
                    maximumTrackTintColor={
                      themeColor !== '#28282B' ? COLORS.SilverGray : themeColor
                    }
                    thumbTintColor={
                      themeColor === '#28282B' ? COLORS.SilverGray : themeColor
                    }
                    tapToSeek={true}
                  />
                  <View style={styles.fontSizeHeightContainer}>
                    <Text
                      style={[
                        styles.fontSizeSmall,
                        {
                          color: themeColors.headerTextColor,
                          backgroundColor: themeColors.backGroundColor,
                          paddingVertical: hp('0.5%'),
                          paddingHorizontal: hp('0.8%'),
                          borderRadius: hp('2%'),
                        },
                      ]}>
                      A
                    </Text>

                    <Text
                      style={[
                        styles.fontSizeMedium,
                        {
                          color: themeColors.headerTextColor,
                          backgroundColor: themeColors.backGroundColor,
                          paddingVertical: hp('0.5%'),
                          paddingHorizontal: hp('0.8%'),
                          borderRadius: hp('2%'),
                        },
                      ]}>
                      A
                    </Text>
                    <Text
                      style={[
                        styles.fontSizeHigest,
                        {
                          color: themeColors.headerTextColor,
                          backgroundColor: themeColors.backGroundColor,
                          paddingVertical: hp('0.5%'),
                          paddingHorizontal: hp('0.8%'),
                          borderRadius: hp('2%'),
                        },
                      ]}>
                      A
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Animatable.View>
        </>

        {/* New Language */}
        <>
          <Animatable.View
            style={{marginHorizontal: hp('0.5%')}}
            animation="bounceInLeft"
            iterationCount={1}
            delay={35}
            duration={1500}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Languages');
              }}
              style={[
                styles.accessibilityAndDashboardContainer,
                styles.shadow,
                {backgroundColor: primaryColor},
              ]}>
              <View>
                <Text
                  style={[
                    styles.fontStyle,
                    {
                      color: themeColors.headerTextColor,
                      fontSize: FONT_SIZE.F_14,
                    },
                  ]}>
                  {commonLabels?.[language]?.UI_LABELS?.LANGUAGE || 'Language'}
                </Text>
              </View>
              <View
                style={{
                  transform: [{scaleX: I18nManager.isRTL === true ? -1 : 1}],
                }}>
                <ArrowRight height={hp('2%')} width={wp('3%')} />
              </View>
            </TouchableOpacity>
          </Animatable.View>
        </>

        {/* App Version */}
        <>
          <View style={styles.versionRightsContainer}>
            <Text
              style={[
                styles.versionText,
                {fontSize: FONT_SIZE.F_11, color: headerTextColor},
              ]}>
              {commonLabels?.[language]?.UI_LABELS?.VERSION || 'Version'} 3.6.9
            </Text>
            <Text
              style={[
                styles.versionText,
                {fontSize: FONT_SIZE.F_12, color: headerTextColor},
              ]}>
              {commonLabels?.[language]?.UI_LABELS?.ALL_RIGHTS_RESERVED ||
                'All Rights Reserved'}
            </Text>
          </View>
        </>
      </ScrollView>
    </View>
  );
};

export default Settings;
