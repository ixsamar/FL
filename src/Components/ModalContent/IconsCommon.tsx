import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Demo = () => {
  const data = [
    {id: 1, iconName: 'shield-checkmark-outline'},
    {id: 2, iconName: 'star-outline'},
    {id: 3, iconName: 'sparkles-outline'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemContainer}>
        {data?.map(item => (
          <TouchableOpacity key={item.id} style={styles.iconLocalContainer}>
            <Icon name={item.iconName} size={hp('2.5%')} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Demo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7EBEF',
    flex: 1,
  },
  itemContainer: {
    borderRadius: hp('0.1%'),
    flexDirection: 'row',
    marginVertical: hp('1%'),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  iconLocalContainer: {
    marginHorizontal: hp('2%'),
    backgroundColor: '#DCE2EA',
    padding: hp('1%'),
    alignSelf: 'center',
    borderRadius: hp('1%'),
    borderColor: '#fff',
    borderWidth: wp('0.2%'),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
