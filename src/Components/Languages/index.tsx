import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {styles} from './styles';
import {languagesData} from '../../APIServices/dummyApisData';
import {useTheme} from '../../Utils/Globles';
import TopHeader from './TopHeader/TopHeader';

// import ContainerWrapper from "../../../components/Wrappers/ContainerWrapper";
// import IconFA from "react-native-vector-icons/FontAwesome";
// import TopHeader from "../../../Componets/TopHeader/TopHeader";

const Languages = () => {
  const [searchText, setSearchText] = useState('');

  const [selectedLanguage, setSelectedLanguage] = useState({
    id: 10,
    languageName: 'English',
    languageKey: 'E',
    borderColor: 'black',
  });

  const renderLanguages = ({item}: {item: any}) => {
    const isSelected = selectedLanguage?.id === item?.id;

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          setSelectedLanguage(item);
          setSearchText('');
        }}>
        <View style={styles.itemContent}>
          <View style={styles.itemTextContainer}>
            <View
              style={[
                styles.itemCircle,
                {
                  borderColor: themeColors.isDarkMode
                    ? themeColors.textColor
                    : item?.borderColor,
                },
              ]}>
              <>
                {item?.logoUrl ? (
                  <Image
                    source={{uri: item?.logoUrl}}
                    height={hp('4.8%')}
                    width={wp('10%')}
                    style={styles.logoImage}
                  />
                ) : (
                  <Text
                    style={[
                      styles.itemCircleText,
                      {color: themeColors.textColor},
                    ]}>
                    {item?.languageKey}
                  </Text>
                )}
              </>
            </View>
            <Text
              style={[styles.itemLanguageName, {color: themeColors.textColor}]}>
              {item?.languageName}
            </Text>
          </View>

          <TouchableOpacity style={[styles.selectionIndicator]}>
            {isSelected && (
              // <IconFA
              //   name="dot-circle-o"
              //   size={hp('3%')}
              //   color={themeColors.textColor}
              // />

              <Text>dotcircle</Text>
            )}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const filteredLanguages = languagesData
    ?.filter(item =>
      item.languageName.toLowerCase().includes(searchText.toLowerCase()),
    )
    .sort((a, b) =>
      a.id === selectedLanguage.id ? -1 : b.id === selectedLanguage.id ? 1 : 0,
    );

  const searchHandilor = () => {
    console.log('clicked 456');
  };

  const {themeColors} = useTheme();

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={[styles.container]}>
        <View style={{marginHorizontal: hp('2%')}}>
          <TopHeader
            screenName={'Languages'}
            goBack
            showSearch
            searchHandilor={searchHandilor}
            searchText={searchText}
            setSearchText={setSearchText}
            inputPlaceholder="Language Search"
          />
        </View>

        <View style={styles.searchContainer}>
          <FlatList
            data={filteredLanguages}
            renderItem={renderLanguages}
            keyExtractor={item => item?.id?.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Languages;
