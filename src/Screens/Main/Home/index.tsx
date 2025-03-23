import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Chats = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Chats</Text>
      </SafeAreaView>
    </View>
  );
};

export default Chats;
