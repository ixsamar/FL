import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    </View>
  );
};

export default Home;
