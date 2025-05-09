import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const NoNotificationsFound = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: hp('40%'),
      }}>
      <Text style={{textAlign: 'center'}}>No Notifications Found </Text>
    </View>
  );
};

export default NoNotificationsFound;

const styles = StyleSheet.create({});
