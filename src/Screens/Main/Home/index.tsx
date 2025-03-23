import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../../Utils/Globles';

const Home = () => {
  const {themeColors} = useTheme();

  return (
    <View
      style={[
        {backgroundColor: themeColors.backGroundColor},
        styles.container,
      ]}>
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
