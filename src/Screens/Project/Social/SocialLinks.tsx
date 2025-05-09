import {I18nManager, Image} from 'react-native';
import {TouchableOpacity, View, Animated} from 'react-native';
// import { COLORS } from "../../Utils/Colors";
// import { darkModeColor } from "../../Screens/Housing/Common/commonComponents";
import IconFW from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/AntDesign';
import IconFA6 from 'react-native-vector-icons/FontAwesome6';
import IconLo from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Text} from 'react-native';
import {styles} from './styles';
// import { images } from "../../Utils/Images";
import {useRef, useState} from 'react';
import {COLORS} from '../../../Utils/Colors';
import {useTheme} from '../../../Utils/Globles';

export const SocialLinks = () => {
  const {themeColors} = useTheme();

  const socialMediaIcons = [
    {name: 'facebook-f', type: 'FontAwesome'},
    {name: 'twitter', type: 'AntDesign'},
    {name: 'instagram', type: 'FontAwesome'},
    {name: 'threads', type: 'FontAwesome6'},
    {name: 'linkedin', type: 'FontAwesome'},
    {name: 'youtube-play', type: 'FontAwesome'},
  ];
  const iconsColorMode = COLORS?.DarkGray;
  // themeColors.themeColor === darkModeColor
  //   ? COLORS.DarkGray
  //   : COLORS.DarkGray;
  return (
    <View style={[styles.bottomIconsSocialLinking]}>
      {socialMediaIcons?.map((icon, index) => (
        <TouchableOpacity key={index}>
          {icon.type === 'FontAwesome' && (
            <IconFW name={icon.name} color={iconsColorMode} size={hp('3%')} />
          )}
          {icon.type === 'AntDesign' && (
            <IconA name={icon.name} color={iconsColorMode} size={hp('3%')} />
          )}
          {icon.type === 'FontAwesome6' && (
            <IconFA6 name={icon.name} color={iconsColorMode} size={hp('3%')} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};
