// import React, {useState} from 'react';
// import {
//   Text,
//   TouchableOpacity,
//   Animated,
//   PanResponder,
//   SafeAreaView,
//   Modal,
// } from 'react-native';
// import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import {styles} from './styles';
// import ModalContent from '../../../Components/ModalContent';

// const Search: React.FC = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [pan] = useState(new Animated.ValueXY({x: 0, y: hp('100%')}));

//   const SWIPE_THRESHOLD = hp('20%');

//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderMove: Animated.event([null, {dy: pan.y}], {
//       useNativeDriver: false,
//     }),
//     onPanResponderRelease: (_, gestureState) => {
//       if (gestureState.dy > SWIPE_THRESHOLD) {
//         closeModal();
//       } else {
//         Animated.timing(pan, {
//           toValue: {x: 0, y: 0},
//           duration: 300,
//           useNativeDriver: false,
//         }).start();
//       }
//     },
//   });

//   const openModal = () => {
//     setModalVisible(true);
//     Animated.timing(pan, {
//       toValue: {x: 0, y: 0},
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const closeModal = () => {
//     Animated.timing(pan, {
//       toValue: {x: 0, y: 0},
//       duration: 200,
//       useNativeDriver: false,
//     }).start(() => {
//       setModalVisible(false);
//     });
//   };

//   const editItem = () => {
//     console.log('Item touched:', 'edit');
//   };
//   const deleteItem = () => {
//     console.log('Item touched:', 'delete');
//   };

//   const selectItem = () => {
//     console.log('Item touched:', 'select');
//   };

//   const archiveItem = () => {
//     console.log('Item touched:', 'archive');
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <TouchableOpacity onPress={openModal} style={styles.button}>
//         <Text>Open Modal</Text>
//       </TouchableOpacity>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         style={[
//           styles.modal,
//           {
//             transform: [{translateY: pan.y}],
//             height: hp('100%'),
//           },
//         ]}
//         {...panResponder.panHandlers}>
//         <ModalContent
//           closeModal={closeModal}
//           editItem={editItem}
//           deleteItem={deleteItem}
//           selectItem={selectItem}
//           archiveItem={archiveItem}
//         />
//       </Modal>
//     </SafeAreaView>
//   );
// };

// export default Search;

import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import HeaderCommon from '../../../Components/HeaderCommon';
import {COLORS} from '../../../Utils/Colors';
import {useTheme} from '../../../Utils/Globles';

const Search = () => {
  const {themeColors} = useTheme();
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{flex: 1, backgroundColor: themeColors.backGroundColor}}>
        <HeaderCommon screenName="Search" showOptions />
      </SafeAreaView>
    </View>
  );
};

export default Search;
