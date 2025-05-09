import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderCommon from '../../../Components/HeaderCommon';
import {SocialLinks} from '../Social/SocialLinks';

const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView style={{flex: 1}}>
        <HeaderCommon screenName="Profile" isBackButton />

        <SocialLinks />
      </SafeAreaView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
