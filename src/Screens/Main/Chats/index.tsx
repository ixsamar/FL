import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import IconsFA from 'react-native-vector-icons/FontAwesome';
import IconsEN from 'react-native-vector-icons/Entypo';
import IconsI from 'react-native-vector-icons/Ionicons';
import IconsA from 'react-native-vector-icons/AntDesign';
import IconsFE from 'react-native-vector-icons/Feather';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {styles} from './styles';
import {chatUsersAPIData} from '../../../APIServices/dummyApisData';

const Chats = ({navigation}: {navigation: any}) => {
  const [searchFlag, setSearchFlag] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const [usersData, setUsersData] = useState(chatUsersAPIData || []);

  const [dpModal, setDpModal] = useState(false);
  const [dpUrl, setDpUrl] = useState<string | null>(null);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [modalScale] = useState(new Animated.Value(0));

  useEffect(() => {
    const filterData = usersData.filter(item =>
      item.userName.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setFilteredData(filterData);
  }, [searchValue, usersData]);

  const handleSearchClear = () => {
    setSearchValue('');
  };

  const handleDpModal = (item: any) => {
    setDpUrl(item.image);
    setDpModal(true);
    Animated.spring(modalScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleDpModalClose = () => {
    Animated.timing(modalScale, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setDpModal(false));
  };

  const handleChat = (userData: any) => {
    console.log('userData--222->', userData);

    navigation.navigate('Chat', {userData: userData});
  };

  const handleLike = () => {
    setLiked(prevLiked => !prevLiked);
    setLikeCount(prevCount => (liked ? prevCount - 1 : prevCount + 1));
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  const renderFriendsList = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.friendsListContainer}
      onPress={() => handleChat(item)}>
      <TouchableOpacity
        onPress={() => handleDpModal(item)}
        style={styles.userPicContainer}>
        <View style={styles.dpContainer}>
          <Image source={{uri: item.image}} style={styles.dp} />
        </View>
      </TouchableOpacity>

      <View style={styles.userInfoContainer}>
        <View style={styles.nameAndActionTimeContainer}>
          <Text numberOfLines={1} style={styles.nameOfUser}>
            {item.userName}
          </Text>
          <Text numberOfLines={1} style={styles.actionTimeText}>
            6.01 PM
          </Text>
        </View>
        <Text numberOfLines={2} style={styles.userDescription}>
          {item.userProfession}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {!searchFlag ? (
          <View style={styles.headerContainer}>
            <TouchableOpacity>
              <Text style={styles.headerText}>Whatsapp</Text>
            </TouchableOpacity>

            <View style={styles.headerIcons}>
              <TouchableOpacity
                onPress={() => setSearchFlag(true)}
                style={styles.searchIcon}>
                <IconsFA name={'search'} size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconsEN name={'dots-three-vertical'} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <TouchableOpacity onPress={() => setSearchFlag(false)}>
                <IconsI name={'arrow-back-outline'} size={20} />
              </TouchableOpacity>
              <TextInput
                value={searchValue}
                onChangeText={value => setSearchValue(value)}
                style={styles.searchInput}
                placeholder="Search..."
              />
            </View>
            {searchValue.length >= 1 && (
              <TouchableOpacity
                onPress={handleSearchClear}
                style={styles.closeIcon}>
                <IconsI name={'close'} size={20} />
              </TouchableOpacity>
            )}
          </View>
        )}

        <FlatList
          data={searchFlag ? filteredData : usersData}
          renderItem={renderFriendsList}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </ScrollView>

      <Modal visible={dpModal} transparent={true} animationType="fade">
        <TouchableWithoutFeedback onPress={handleDpModalClose}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <Animated.View
                style={[
                  styles.modalContent,
                  {transform: [{scale: modalScale}]},
                ]}>
                <View style={styles.modalHeader}>
                  <View style={styles.viewCountContainer}>
                    {/* <IconsA name={'eyeo'} size={25} /> */}
                    <Text>eyeo</Text>

                    <Text style={styles.viewCountText}>{'30'}</Text>
                  </View>
                  <TouchableOpacity onPress={handleDpModalClose}>
                    <IconsI name={'close'} size={30} />
                  </TouchableOpacity>
                </View>
                <Image source={{uri: dpUrl || ''}} style={styles.modalDp} />
                <View style={styles.likeDislikeContainer}>
                  <View style={styles.dislikeButton}>
                    <TouchableOpacity onPress={handleDislike}>
                      <IconsFE name={'download'} size={30} />
                    </TouchableOpacity>
                    <Text style={styles.countText}>{dislikeCount}</Text>
                  </View>

                  <View style={styles.likeButton}>
                    <Text style={styles.countText}>{likeCount}</Text>
                    <TouchableOpacity onPress={handleLike}>
                      {liked ? (
                        <IconsI name={'heart-sharp'} size={30} color="red" />
                      ) : (
                        <IconsI name={'heart-outline'} size={30} />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default Chats;
