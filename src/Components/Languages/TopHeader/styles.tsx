import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FONT} from '../../../Utils/Globles';
import {COLORS} from '../../../Utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  headerContainer: {
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 19,
    marginLeft: hp('0.5%'),
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  searchIcon: {
    marginHorizontal: hp('1%'),
  },
  searchContainer: {
    backgroundColor: 'lightgrey',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: hp('3%'),
    marginBottom: hp('1%'),
  },
  searchInputContainer: {
    flexDirection: 'row',
    marginLeft: hp('1.5%'),
  },
  searchInput: {
    borderColor: 'black',
    marginHorizontal: hp('1.5%'),
    flex: 1,
  },
  closeIcon: {
    marginRight: hp('1.5%'),
  },

  //--------------------------- Friends List

  friendsListContainer: {
    backgroundColor: '#fff',
    borderRadius: hp('1%'),
    marginVertical: hp('0.5%'),
    flex: 1,
    borderWidth: wp('0.2%'),
    borderColor: 'rgba(0, 0, 0, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dpContainer: {
    backgroundColor: '#fff',
    borderRadius: hp('5%'),
    padding: hp('0.2%'),
  },
  dp: {
    width: hp('5.5%'),
    height: wp('12%'),
    resizeMode: 'cover',
    borderRadius: hp('4%'),
  },
  userPicContainer: {
    padding: hp('0.1%'),
    borderRadius: hp('4%'),
    margin: hp('1% '),
  },
  nameOfUser: {
    fontSize: hp('1.5%'),
    color: 'black',
    flex: 1,
  },

  userDescription: {
    fontSize: hp('1.3%'),
    color: 'grey',
  },
  friendsListContainerMini: {
    flex: 1,
    marginHorizontal: hp('1%'),
  },
  userInfoContainer: {
    flex: 3,
  },
  nameAndActionTimeContainer: {
    flexDirection: 'row',
    marginBottom: hp('0.5%'),
  },
  userDiscription: {
    fontSize: hp('1.3%'),
    fontFamily: FONT.MEDIUM,
    color: COLORS.Black,
    marginRight: hp('1%'),
  },
  actionTimeText: {
    fontSize: hp('1.3%'),
    color: 'black',
    textAlign: 'right',
    marginHorizontal: hp('1%'),
  },

  //-------------------------- Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: wp('94%'),
    backgroundColor: '#D0D3D4',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  viewCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewCountText: {
    marginRight: hp('1%'),
  },
  modalDp: {
    width: wp('70%'),
    height: wp('70%'),
    borderRadius: 200,
    marginVertical: 20,
    borderColor: 'white',
    borderWidth: wp('0.5%'),
  },
  likeDislikeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dislikeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countText: {
    marginHorizontal: hp('1%'),
  },

  //search
  searchBox: {
    flexDirection: 'row',
    borderRadius: wp('2%'),
    paddingRight: wp('3%'),
    paddingVertical: hp('1.3%'),
    borderWidth: wp('0.2%'),
    borderColor: '#ccc',
    width: '100%',
    justifyContent: 'space-between',
  },
  clearButton: {
    alignSelf: 'center',
  },
});
