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
import {styles} from './styles';

const HeaderCommon = ({
  profileData = {
    name: '',
    profession: '',
    userPhoto: '',
  },
  onDotsPress,
  screenName = '',
  onNotificationPress,
}: {
  profileData?: any;
  onDotsPress: () => void;
  screenName: string;
  onNotificationPress: () => void;
}) => {
  const {themeColors} = useTheme();
  const {FONT_SIZE} = useFont();

  const navigation = useNavigation();

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
            onPress={() => {
              // navigation.openDrawer();
            }}>
            <Image
              source={images.MenProfile}
              style={[
                styles.profileImage,
                {width: hp('4.5%'), height: hp('4.5%')},
              ]}
            />

            <View style={styles.profileTextContainer}>
              <Text
                style={[styles.profileText, {color: themeColors.textColor}]}>
                {profileData?.name || ''}
              </Text>
              <Text
                style={[styles.profileText, {color: themeColors.textColor}]}>
                {profileData?.profession || ''}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </>

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

      {/* Notifications || Favourit */}
      <View style={styles.notificationContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={onNotificationPress}
            style={{marginHorizontal: hp('1%')}}>
            <IconO name={'heart'} size={hp('2.4%')} color={COLORS.DarkBlack} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onNotificationPress}
            style={{marginHorizontal: hp('1%')}}>
            <IconO name={'heart'} size={hp('2.4%')} color={COLORS.DarkBlack} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDotsPress}>
            <IconE
              name={'dots-three-vertical'}
              size={hp('2.3%')}
              color={COLORS.DarkBlack}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderCommon;
