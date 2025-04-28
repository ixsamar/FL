import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import HeaderCommon from '../../../Components/HeaderCommon';

const Home = () => {
  const profileData = {
    name: 'SamaraSimhaReddy.K',
    profession: 'React Native Developer',
    userPhoto: '',
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView style={{flex: 1}}>
        <HeaderCommon
          profileData={profileData}
          onDotsPress={() => {
            console.log('sss');
          }}
          onNotificationPress={() => {
            console.log('sss');
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;
