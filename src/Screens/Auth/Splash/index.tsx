import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {FONT, useFont} from '../../../Utils/Globles';

const Splash = ({navigation}: {navigation: any}) => {
  const {FONT_SIZE} = useFont();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <LinearGradient colors={['#6a11cb', '#2575fc']} style={styles.container}>
      <Text
        style={[
          styles.title,
          {fontSize: FONT_SIZE.F_18, fontFamily: FONT.BOLD},
        ]}>
        MyApp
      </Text>
      <ActivityIndicator size="large" color="#fff" />
    </LinearGradient>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
});
