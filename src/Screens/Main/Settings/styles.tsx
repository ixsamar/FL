import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FONT} from '../../../Utils/Globles';

export const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
  },
  settingsBodyContainer: {
    flex: 1,
    paddingHorizontal: hp('1%'),
  },
  accessibilityAndDashboardContainer: {
    padding: hp('2.1%'),
    borderRadius: hp('2%'),
    marginVertical: hp('0.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  themeContainer: {
    padding: hp('2%'),
    paddingVertical: hp('2.5%'),
    borderRadius: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp('0.5%'),
  },
  themeColorsGroupContainer: {
    flexDirection: 'row',
  },
  themeColorContainer: {
    padding: hp('0.8%'),
    borderRadius: hp('5%'),
    marginHorizontal: hp('0.5%'),
    alignItems: 'center',
  },
  modeNotificationsContainer: {
    padding: hp('1.8%'),
    borderRadius: hp('2%'),
    marginVertical: hp('0.5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fontSizeContainer: {
    padding: hp('1.5%'),
    borderRadius: hp('2%'),
    marginVertical: hp('0.5%'),
  },
  fontStyle: {
    fontFamily: FONT.SEMI_BOLD,
  },
  versionRightsContainer: {
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
  versionText: {fontFamily: FONT.MEDIUM},
  sliderContainer: {
    marginTop: hp('1.5%'),
  },
  fontSizeHeightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: hp('0.5%'),
  },

  fontSizeSmall: {
    fontFamily: FONT.SEMI_BOLD,
    fontSize: hp('1.3%'),
  },

  fontSizeMedium: {
    fontFamily: FONT.SEMI_BOLD,
    fontSize: hp('1.5%'),
    marginLeft: hp('0.5%'),
  },
  fontSizeHigest: {
    fontFamily: FONT.SEMI_BOLD,

    fontSize: hp('2%'),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
