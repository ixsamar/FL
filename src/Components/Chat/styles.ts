import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1%'),
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    fontSize: wp('4%'),
    marginRight: wp('3%'),
    marginBottom: hp('1%'),
    textAlignVertical: 'top',
    maxHeight: hp('20%'),
  },

  emojiButton: {
    fontSize: wp('6%'),
  },
  keyboardButton: {
    fontSize: wp('6%'),
  },
  chatItemCommon: {
    maxWidth: wp('80%'),
    marginBottom: hp('1%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    borderRadius: 20,
  },
  send: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
  },
  receive: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
  },
  msgtxt: {
    fontSize: wp('4%'),
  },
  timestamp: {
    fontSize: wp('3%'),
    color: '#666',
    marginTop: hp('1%'),
  },
  responseIcon: {
    alignSelf: 'flex-end',
    fontSize: wp('4%'),
    marginTop: hp('1%'),
  },
  listStyle: {
    paddingHorizontal: wp('3%'),
    paddingBottom: hp('2%'),
  },
  //user card
  userCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: hp('1%'),
    alignItems: 'center',
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dpAndName: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: hp('1%'),
  },
  userName: {
    marginLeft: hp('0.5%'),
  },
});
