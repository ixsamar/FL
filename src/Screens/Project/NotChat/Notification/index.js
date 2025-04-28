import React from 'react';
import {View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Notification = () => {
  const chatData = [
    {id: '1', sender: 'John', message: 'Hello, how are you?'},
    {id: '2', sender: 'Jane', message: 'I am good, thanks! How about you?'},
    // Add more chat items as needed
  ];

  const Notif = ({item}) => {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.notification}>
          <Text>{`${item.sender}: ${item.message}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text>Notification</Text>
      <FlatList
        data={chatData}
        renderItem={Notif}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  notification: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
});

export default Notification;
