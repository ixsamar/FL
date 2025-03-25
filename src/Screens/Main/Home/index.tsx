import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import HomeHeader from '../../../Components/HomeHeader';

const Chats = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HomeHeader />
        <Text>Chats</Text>
      </SafeAreaView>
    </View>
  );
};

export default Chats;
