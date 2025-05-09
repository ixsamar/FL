import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {images} from '../..//Utils/Images';
import {FONT, useFont, useTheme} from '../../Utils/Globles';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../Utils/Colors';
import IconE from 'react-native-vector-icons/Entypo';
import IconO from 'react-native-vector-icons/Octicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';

type HeaderCommonProps = {
  profileData?: {
    name?: string;
    location?: string;
    userPhoto?: string;
  };
  onDotsPress?: () => void;
  screenName?: string;
  // onNotificationPress?: () => void;
  isBackButton?: boolean;
  showOptions?: boolean;
  showNotification?: boolean;
  isManageNotifications?: boolean;
};

const HeaderCommon: React.FC<HeaderCommonProps> = ({
  profileData = {
    name: '',
    location: '',
    userPhoto: '',
  },
  onDotsPress,
  screenName,
  // onNotificationPress,
  isBackButton,
  showOptions,
  showNotification,
  isManageNotifications,
}) => {
  const {themeColors} = useTheme();
  const {FONT_SIZE} = useFont();
  const navigation = useNavigation();

  const onPressOnProfile = () => {
    navigation.navigate('Profile');
  };

  const onLocationPress = () => {
    navigation.navigate('MyLocation');
  };

  const onNotificationPress = () => {
    navigation.navigate('Notification');
  };

  return (
    <View
      style={[
        styles.profileContainer,
        {backgroundColor: themeColors.primaryColor},
      ]}>
      {/*  Profile */}
      <>
        {profileData?.name && (
          <TouchableOpacity
            style={styles.profileTouch}
            onPress={onPressOnProfile}>
            <Image
              source={images.MenProfile}
              style={[
                styles.profileImage,
                {width: hp('4.4%'), height: hp('4.1%')},
              ]}
            />

            <View style={styles.profileTextContainer}>
              <Text
                style={[styles.profileText, {color: themeColors.textColor}]}>
                {profileData?.name || ''}
              </Text>

              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={onLocationPress}>
                <Text
                  style={[
                    styles.profileText,
                    {color: themeColors.textColor, marginRight: hp('0.5%')},
                  ]}>
                  {profileData?.location || ''}
                </Text>

                <IconFA
                  name="map-marker"
                  size={hp('1.3%')}
                  color={COLORS.DarkBlack}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </>

      <View style={{flexDirection: 'row'}}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {isBackButton && (
            <IconO
              name="arrow-left"
              size={hp('2.5%')}
              color={COLORS.DarkBlack}
              style={{marginRight: hp('1%')}}
            />
          )}
        </TouchableOpacity>

        {/* Title Name */}
        <>
          <Text
            style={[
              {
                color: themeColors.textColor,
                fontFamily: FONT.SEMI_BOLD,
                fontSize: FONT_SIZE.F_20,
              },
            ]}>
            {screenName || ''}
          </Text>
        </>
      </View>

      {/* Notifications || Favourit */}
      <View style={styles.notificationContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* <TouchableOpacity
            onPress={onNotificationPress}
            style={{marginHorizontal: hp('1%')}}>
            <IconO name={'heart'} size={hp('2.4%')} color={COLORS.DarkBlack} />
          </TouchableOpacity>

       
         */}

          {/* Notification */}
          <>
            {showNotification && (
              <TouchableOpacity
                onPress={onNotificationPress}
                style={{marginHorizontal: hp('1%')}}>
                <IconO
                  name={'heart'}
                  size={hp('2.4%')}
                  color={COLORS.DarkBlack}
                />
              </TouchableOpacity>
            )}
          </>

          {/* Manage Notification */}
          <>
            {isManageNotifications && (
              <TouchableOpacity
                onPress={onNotificationPress}
                style={{marginHorizontal: hp('1%')}}>
                <IconI
                  name={'notifications-outline'}
                  size={hp('2.4%')}
                  color={COLORS.DarkBlack}
                />
              </TouchableOpacity>
            )}
          </>

          {/* Options */}
          <>
            {showOptions && (
              <TouchableOpacity onPress={onDotsPress}>
                <IconE
                  name={'dots-three-vertical'}
                  size={hp('2%')}
                  color={COLORS.DarkBlack}
                  // style={{optionsCustomStyle}}
                />
              </TouchableOpacity>
            )}
          </>
          {/* <TouchableOpacity onPress={onDotsPress}>
            <IconFA name={'share'} size={hp('2.3%')} color={COLORS.DarkBlack} />
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default HeaderCommon;
