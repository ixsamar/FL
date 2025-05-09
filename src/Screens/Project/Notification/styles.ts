import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: wp('3%'),
    flex: 1,
  },
  sectionContainer: {
    paddingTop: hp('1.5%'),
    flex: 1,
  },
  sectionTitle: {
    marginBottom: hp(1),
  },
  notificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1.2%'),
  },
  notificationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: wp('10.5%'),
    height: hp('5%'),
    borderRadius: wp('5.5%'),
    marginRight: wp('3%'),
    backgroundColor: '#ccc',
  },
  textContainer: {
    flexShrink: 1,
  },

  descriptionText: {
    color: '#555',
    marginTop: hp('0.5%'),
  },
  actionButton: {
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('0.8%'),
    borderWidth: 1,
    borderRadius: wp('1.5%'),
    marginLeft: wp('2%'),
  },

  //No Notifications Found
  noNotiFoundContainer: {},
});
