import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: hp('2%'),
  },
  modal: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#e0e0e0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    maxHeight: hp('40%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleText: {
    fontSize: 18,
  },
  optionsContainer: {
    backgroundColor: '#fff',
    borderRadius: hp('1%'),
  },
  option: {
    height: hp('4%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: hp('2%'),
    marginVertical: hp('0.8%'),
    flexDirection: 'row',
  },
  closeButton: {
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: hp('1%'),
    marginHorizontal: hp('1%'),
  },
  closeButtonText: {
    fontSize: 18,
  },
  bottomLine: {
    height: hp('0.1%'),
    backgroundColor: '#e0e0e0',
    flex: 1,
    marginHorizontal: hp('1.5%'),
  },
  optionText: {
    fontSize: hp('1.7%'),
  },
});
