import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FONT, useFont, useTheme} from '../../Utils/Globles';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../Utils/Colors';
import IconO from 'react-native-vector-icons/Octicons';
import IconE from 'react-native-vector-icons/Entypo';

export const ChatHeader = ({
  userData,
}: {
  userData: {userName: ''; image: ''};
}) => {
  console.log('userData--->', userData);

  const {themeColors} = useTheme();
  const {FONT_SIZE} = useFont();
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.profileContainer,
        {backgroundColor: themeColors.primaryColor},
      ]}>
      {/* Back Button || DP || Title Name */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: hp('5%'),
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconO
            name="arrow-left"
            size={hp('3%')}
            color={COLORS.DarkBlack}
            style={{marginRight: hp('0.5%')}}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.dpAndName}>
            <Image
              source={{
                url:
                  userData?.image ||
                  'https://img.freepik.com/premium-vector/user-circle-with-blue-gradient-circle_78370-4727.jpg?semt=ais_hybrid&w=740',
              }}
              style={[
                {
                  width: hp('4%'),
                  height: hp('4%'),
                  borderRadius: wp('5%'),
                  marginRight: hp('1%'),
                },
              ]}
            />
          </View>

          <Text
            style={[
              {
                color: themeColors.textColor,
                fontFamily: FONT.SEMI_BOLD,
                fontSize: FONT_SIZE.F_20,
              },
            ]}>
            {userData?.userName ? userData?.userName : 'User'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => {}}>
            <IconE
              name={'dots-three-vertical'}
              size={hp('2%')}
              color={COLORS.DarkBlack}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: hp('1.5%'),
  },
  dpAndName: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: hp('1%'),
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('0.5%'),
  },
});
