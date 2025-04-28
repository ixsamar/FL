import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {FONT} from '../../../Utils/Globles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {COLORS} from '../../../Utils/Colors';
import IconF from 'react-native-vector-icons/Feather';

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={{fontFamily: FONT.EXTRA_BOLD}}>Test Font Family</Text>
        <Text style={{fontFamily: FONT.BOLD}}>Test Font Family</Text>
        <Text style={{fontFamily: FONT.SEMI_BOLD}}>Test Font Family</Text>
        <Text style={{fontFamily: FONT.MEDIUM}}>Test Font Family</Text>
        <Text style={{fontFamily: FONT.REGULAR}}>Test Font Family</Text>
        <Text style={{fontFamily: FONT.LIGHT}}>Test Font Family</Text>
        <Text style={{fontFamily: FONT.EXTRA_LIGHT}}>Test Font Family</Text>
        <Text style={{fontFamily: FONT.THIN}}>Test Font Family</Text>

        <Text>Test Vector Icons </Text>
        <IconF name={'activity'} size={hp('2%')} color={COLORS.Black} />
      </SafeAreaView>
    </View>
  );
};

export default Home;
