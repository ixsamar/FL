import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp('5%'),
    width: wp('100%'),
  },
  content: {
    alignItems: 'center',
    width: wp('85%'),
    marginTop: hp('4%'),
  },
  title: {
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: hp('2%'),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: hp('2%'),
    color: '#BBB',
    textAlign: 'center',
    marginBottom: hp('3%'),
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: hp('2%'),
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
  },
  infoText: {
    fontSize: hp('2.2%'),
    color: '#FFF',
    marginVertical: hp('0.5%'),
    textAlign: 'center',
  },
  button: {
    width: wp('70%'),
    borderRadius: 10,
  },
  buttonGradient: {
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: '#1E1E1E',
    textAlign: 'center',
    paddingVertical: hp('1.5%'),
  },
});
