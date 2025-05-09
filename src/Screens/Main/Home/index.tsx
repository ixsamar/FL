import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import HeaderCommon from '../../../Components/HeaderCommon';
import {SocialLinks} from '../../Project/Social/SocialLinks';
import CameraGalleryPopup from '../../../Components/CameraGalleryPopup';

const Home = ({navigation}: {navigation: any}) => {
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
          showOptions
          showNotification
        />
        {/* <CameraGalleryPopup /> */}
      </SafeAreaView>
    </View>
  );
};

export default Home;
