import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Post</Text>
      </SafeAreaView>
    </View>
  );
};

export default Post;
