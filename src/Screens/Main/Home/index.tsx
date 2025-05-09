import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import HeaderCommon from '../../../Components/HeaderCommon';

const Home = () => {
  const profileData = {
    userPhoto: '',
    name: 'SamaraSimhaReddy',
    location: 'Hyderabad',
  };

  console.log(profileData);

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
          showOptions
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;
