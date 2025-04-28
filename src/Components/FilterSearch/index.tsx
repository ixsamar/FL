// import React, {useState} from 'react';
// import {
//   View,
//   TextInput,
//   FlatList,
//   Text,
//   StyleSheet,
//   Modal,
//   TouchableOpacity,
// } from 'react-native';

// const FilterSearch = () => {
//   const [searchQuery, setSearchQuery] = useState({});
//   const [filteredData, setFilteredData] = useState([]);
//   const [filterType, setFilterType] = useState('name');
//   const [isFilterModalVisible, setFilterModalVisible] = useState(false);

//   const userData = [
//     {
//       id: 1,
//       name: 'John Doe',
//       position: 'Software Engineer',
//       skills: ['ReactNative', 'Java', 'Node.js'],
//       experience: {
//         totalExperience: 5,
//         currentCompany: 'ABC Corp',
//         currentCTC: 1000000,
//         expectedCTC: 1200000,
//         noticePeriod: '30 days',
//       },
//       languages: {
//         nativeLanguage: 'Telugu',
//         knownLanguage: ['English', 'Hindi', 'Tamil'],
//       },
//       address: {
//         permanentAddress: {
//           name: 'Hyderabad',
//           state: 'Telangana',
//           latitude: 17.385044,
//           longitude: 78.486671,
//         },
//         locationName: 'Hyderabad',
//         state: 'Telangana',
//         latitude: 17.385044,
//         longitude: 78.486671,
//       },
//       connectingPlatforms: {
//         linkedIn: 'https://www.linkedin.com/in/johndoe',
//         github: '',
//         stackOverflow: '',
//         phoneNumber: '1234567890',
//         email: '',
//         telegram: '',
//         whatsapp: '',
//         other: '',
//       },
//     },
//     // Add more users for testing the filtering
//     {
//       id: 2,
//       name: 'Jane Smith',
//       position: 'Product Manager',
//       skills: ['Product Management', 'Agile', 'JavaScript'],
//       experience: {
//         totalExperience: 7,
//         currentCompany: 'XYZ Ltd',
//         currentCTC: 1200000,
//         expectedCTC: 1400000,
//         noticePeriod: '45 days',
//       },
//       languages: {
//         nativeLanguage: 'English',
//         knownLanguage: ['Spanish', 'French'],
//       },
//       address: {
//         permanentAddress: {
//           name: 'Bangalore',
//           state: 'Karnataka',
//           latitude: 12.9716,
//           longitude: 77.5946,
//         },
//         locationName: 'Bangalore',
//         state: 'Karnataka',
//         latitude: 12.9716,
//         longitude: 77.5946,
//       },
//       connectingPlatforms: {
//         linkedIn: 'https://www.linkedin.com/in/janesmith',
//         github: '',
//         stackOverflow: '',
//         phoneNumber: '0987654321',
//         email: '',
//         telegram: '',
//         whatsapp: '',
//         other: '',
//       },
//     },
//   ];

//   const handleSearch = (text, type) => {
//     setSearchQuery({...searchQuery, [type]: text});
//     const filtered = userData.filter(
//       item =>
//         item[type]?.toString().toLowerCase().includes(text.toLowerCase()) ||
//         (type === 'skills' &&
//           item.skills.some(skill =>
//             skill.toLowerCase().includes(text.toLowerCase()),
//           )) ||
//         (type === 'languages' &&
//           item.languages.knownLanguage.some(language =>
//             language.toLowerCase().includes(text.toLowerCase()),
//           )),
//     );
//     setFilteredData(filtered);
//   };

//   const openFilterModal = () => {
//     setFilterModalVisible(true);
//   };

//   const closeFilterModal = () => {
//     setFilterModalVisible(false);
//   };

//   const applyFilter = type => {
//     setFilterType(type);
//     setSearchQuery({...searchQuery, [type]: ''}); // Clear search query for the new filter type
//     closeFilterModal();
//   };

//   const searchClearHandler = type => {
//     setSearchQuery({...searchQuery, [type]: ''}); // Clear search query for the selected filter type
//     handleSearch('', type); // Filter with an empty query to reset the filtered data
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.filterContainer}>
//         <Text style={styles.filterText}>Filter By: {filterType}</Text>
//         <TouchableOpacity style={styles.filterButton} onPress={openFilterModal}>
//           <Text>Change Filter</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.inputContainer}>
//         <View style={styles.input}>
//           <TextInput
//             placeholder="Search..."
//             onChangeText={text => handleSearch(text, filterType)}
//             value={searchQuery[filterType]}
//           />
//           <TouchableOpacity onPress={() => searchClearHandler(filterType)}>
//             <Text>X</Text>
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity style={styles.searchButton}>
//           <Text>Search</Text>
//         </TouchableOpacity>
//       </View>
//       {filteredData.length > 0 ? (
//         <FlatList
//           data={filteredData}
//           keyExtractor={item => item.id.toString()}
//           renderItem={({item}) => (
//             <TouchableOpacity
//               style={styles.item}
//               onPress={() => {
//                 console.log(item.name);
//               }}>
//               <Text style={styles.name}>{item.name}</Text>
//               <Text style={styles.position}>{item.position}</Text>
//               <Text style={styles.skills}>{item.skills.join(', ')}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       ) : (
//         <Text>No results found.</Text>
//       )}
//       <Modal visible={isFilterModalVisible} transparent animationType="slide">
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <TouchableOpacity
//               style={styles.modalItem}
//               onPress={() => applyFilter('name')}>
//               <Text>Name</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.modalItem}
//               onPress={() => applyFilter('position')}>
//               <Text>Position</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.modalItem}
//               onPress={() => applyFilter('skills')}>
//               <Text>Skills</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.modalItem}
//               onPress={() => applyFilter('languages')}>
//               <Text>Languages</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.modalCloseButton}
//               onPress={closeFilterModal}>
//               <Text>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   filterText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   filterButton: {
//     padding: 5,
//     backgroundColor: '#ccc',
//     borderRadius: 5,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   searchButton: {
//     backgroundColor: 'green',
//     padding: 10,
//     borderRadius: 5,
//     marginLeft: 10,
//   },
//   item: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingVertical: 10,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   position: {
//     fontSize: 14,
//     color: '#666',
//   },
//   skills: {
//     fontSize: 14,
//     color: '#333',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//   },
//   modalItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   modalCloseButton: {
//     padding: 10,
//     marginTop: 10,
//     backgroundColor: '#ccc',
//     borderRadius: 5,
//     alignSelf: 'flex-end',
//   },
// });

// export default FilterSearch;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconF from 'react-native-vector-icons/Feather';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {COLORS} from '../../Utils/Colors';
import {filterUserData} from '../../APIServices/dummyApisData';

const FilterSearch = () => {
  const [usersData, setUsersData] = React.useState(filterUserData);
  const [sortedUsers, setSortedUsers] = React.useState(filterUserData);

  return (
    <View style={{flex: 1}}>
      <View>
        <View>
          <IconF name={''} size={hp('2.3%')} color={COLORS.DarkBlack} />
        </View>
      </View>
      <Text>FilterSearch</Text>
    </View>
  );
};

export default FilterSearch;

const styles = StyleSheet.create({});
