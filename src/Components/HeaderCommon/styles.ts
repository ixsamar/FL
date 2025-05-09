import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#128C7E',
    height: hp('6%'),
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: hp('1.5%'),
  },
  profileTouch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: wp('5%'),
    backgroundColor: 'blue',
    marginRight: hp('1%'),
  },
  profileDivider: {
    width: '1%',
    height: hp('4%'),
    backgroundColor: '#FFFFFF',
  },
  profileTextContainer: {
    marginLeft: hp('0.5%'),
  },
  profileText: {
    color: '#FFFFFF',
    fontSize: hp('1.4%'),
  },
  notificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('0.5%'),
  },
  iconContiner: {
    marginRight: hp('0.5%'),
  },
});
