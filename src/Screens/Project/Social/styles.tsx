import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../../Utils/Colors';
import {FONT} from '../../../Utils/Globles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyMainContainer: {
    flex: 1,
    paddingTop: hp('7%'),
  },

  fontStyle: {
    marginLeft: hp('1%'),
    padding: hp('0.5%'),
  },
  bottomIconsSocialLinking: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('1%'),
    marginHorizontal: hp('1%'),
    marginBottom: hp('1%'),
  },
  iconColor: {
    color: COLORS.DarkGray,
  },
  headerContainer: {},
  topTextNavIconContainer: {
    paddingHorizontal: hp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: hp('1%'),
  },
  headerTitle: {
    color: '#fff',
    fontFamily: FONT.MEDIUM,
    fontSize: hp('2%'),
  },
});
