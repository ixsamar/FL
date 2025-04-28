import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

interface ModalOptionProps {
  titleText: string;
  iconName: string;
  onPress: () => void;
}

const ModalOption: React.FC<ModalOptionProps> = ({
  titleText,
  iconName,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.option}>
    <View>
      <Text style={styles.optionText}>{titleText}</Text>
    </View>
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconName} size={hp('2.5%')} />
    </TouchableOpacity>
  </TouchableOpacity>
);

export default ModalOption;
