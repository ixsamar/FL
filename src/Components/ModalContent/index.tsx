import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {styles} from './styles';
import ModalOption from './ModalOption';

interface ModalContentProps {
  closeModal: () => void;
  editItem: () => void;
  deleteItem: () => void;
  selectItem: () => void;
  archiveItem: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({
  closeModal,
  editItem,
  deleteItem,
  selectItem,
  archiveItem,
}) => (
  <View style={styles.modalContent}>
    <View style={{alignSelf: 'center', marginBottom: hp('2%')}}>
      <Text style={styles.titleText}>Selected Item More Options</Text>
    </View>

    <View style={styles.optionsContainer}>
      <ModalOption
        titleText="Select"
        iconName="checkmark-circle-outline"
        onPress={selectItem}
      />

      <View style={styles.bottomLine} />

      <ModalOption
        titleText="Edit"
        iconName="hammer-outline"
        onPress={editItem}
      />

      <View style={styles.bottomLine} />
      <ModalOption
        titleText="Archive"
        iconName="archive"
        onPress={archiveItem}
      />
      <View style={styles.bottomLine} />

      <ModalOption
        titleText="Delete"
        iconName="trash-outline"
        onPress={deleteItem}
      />
    </View>

    <View>
      <TouchableOpacity
        onPress={closeModal}
        style={{marginVertical: hp('1.5%')}}>
        <View style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default ModalContent;
