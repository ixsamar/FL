import React from 'react';
import {Modal, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CameraGalleryPopup = ({
  visible,
  onClose,
  onOpenCamera,
  onOpenGallery,
}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onOpenCamera} style={styles.button}>
            <Text style={styles.buttonText}>Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onOpenGallery} style={styles.button}>
            <Text style={styles.buttonText}>Open Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CameraGalleryPopup;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0.5, 0.8)',
  },
  modalContent: {
    width: wp('80%'),
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  button: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'bold',
    color: '#333',
  },
});
