import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Notification from '../Notification';
import Chat from '../../Friends/Chat';
import MyActivitys from '../MyActivitys';
import MiniHeader from '../../../Componets/MiniHeader';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const NotChat = ({navigation}) => {
  const [show, setShow] = useState('Notification');

  return (
    <SafeAreaView style={{flex: 1}}>
      <MiniHeader title={'Notifications'} navigation={navigation} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: hp('2%'),
        }}>
        <TouchableOpacity
          onPress={() => setShow('Notification')}
          style={{
            backgroundColor: 'orange',
            padding: hp('1%'),
            borderRadius: hp('1%'),
          }}>
          <Text>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShow('Chat')}
          style={{
            backgroundColor: 'skyblue',
            padding: hp('1%'),
            borderRadius: hp('1%'),
          }}>
          <Text>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShow('MyActivitys')}
          style={{
            backgroundColor: 'pink',
            padding: hp('1%'),
            borderRadius: hp('1%'),
          }}>
          <Text>MyActivitys</Text>
        </TouchableOpacity>
      </View>

      {show === 'Notification' ? <Notification /> : null}
      {show === 'Chat' ? <Chat /> : null}
      {show === 'MyActivitys' ? <MyActivitys /> : null}
    </SafeAreaView>
  );
};

export default NotChat;
