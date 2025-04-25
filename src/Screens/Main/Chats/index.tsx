import {View} from 'react-native';
import React from 'react';
import UsersChatList from '../../../Components/UsersChatList';

const Chats = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
      <UsersChatList navigation={navigation} />
    </View>
  );
};

export default Chats;
