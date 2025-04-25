import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import HomeHeader from '../../../Components/HomeHeader';

const Home = () => {
  console.log('knjhjhjh');

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HomeHeader />
        <Text>Home----</Text>
      </SafeAreaView>
    </View>
  );
};

export default Home;
