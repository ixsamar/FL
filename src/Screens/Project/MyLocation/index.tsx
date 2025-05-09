import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderCommon from '../../../Components/HeaderCommon';

const MyLocation = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView style={{flex: 1}}>
        <HeaderCommon screenName="MyLocation" isBackButton />
      </SafeAreaView>
    </View>
  );
};

export default MyLocation;

const styles = StyleSheet.create({});
