import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import HeaderCommon from '../../../Components/HeaderCommon';

const Post = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <HeaderCommon screenName="Post" showOptions />
      </SafeAreaView>
    </View>
  );
};

export default Post;
