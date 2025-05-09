import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  Image,
} from 'react-native';
import HeaderCommon from '../../../Components/HeaderCommon';
import {FONT, useFont, useTheme} from '../../../Utils/Globles';
import moment from 'moment';
import {notificationsAPIData} from '../../../APIServices/dummyApisData';
import {styles} from './styles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import NoNotificationsFound from './noNotificationsFound';
import {COLORS} from '../../../Utils/Colors';

type NotificationItem = {
  id: number;
  name: string;
  dateTime: string;
  type: string;
  action: string;
  description: string;
  profileImage?: string;
  eventId?: string;
  imageUrl?: string;
};

const Notifications = ({navigation}: {navigation: any}) => {
  const {themeColors} = useTheme();
  const {FONT_SIZE} = useFont();

  const [notificationsData, setNotificationsData] =
    useState<NotificationItem[]>(notificationsAPIData);

  console.log('notificationsData--->', notificationsData);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      const newNotification: NotificationItem = {
        id: Date.now(),
        name: 'New User',
        dateTime: new Date().toISOString(),
        type: 'FriendRequest',
        action: 'Follow',
        description: 'New User sent you a friend request.',
      };
      setNotificationsData(prev => [newNotification, ...prev]);
      setRefreshing(false);
    }, 1500);
  }, []);

  const groupNotifications = () => {
    const groups: {[key: string]: NotificationItem[]} = {
      Today: [],
      Yesterday: [],
      'Last 7 Days': [],
      'Last 30 Days': [],
      Earlier: [],
    };

    const now = moment();

    notificationsData.forEach(item => {
      const date = moment(item.dateTime);
      const diffInDays = now.diff(date, 'days');

      if (diffInDays === 0) {
        groups.Today.push(item);
      } else if (diffInDays === 1) {
        groups.Yesterday.push(item);
      } else if (diffInDays <= 7) {
        groups['Last 7 Days'].push(item);
      } else if (diffInDays <= 30) {
        groups['Last 30 Days'].push(item);
      } else {
        groups.Earlier.push(item);
      }
    });

    return groups;
  };

  const grouped = groupNotifications();

  const renderNotificationItem = (item: NotificationItem) => (
    <View key={item?.id} style={styles.notificationContainer}>
      <TouchableOpacity
        style={styles.notificationRow}
        onPress={() => console.log(item?.id)}>
        <Image
          source={{
            uri:
              item?.profileImage ||
              'https://img.freepik.com/premium-vector/user-circle-with-blue-gradient-circle_78370-4727.jpg?semt=ais_hybrid&w=740',
          }}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={{fontSize: FONT_SIZE.F_16, fontFamily: FONT.SEMI_BOLD}}>
            {item?.name}
          </Text>
          <Text
            numberOfLines={2}
            style={[
              styles.descriptionText,
              {fontSize: FONT_SIZE.F_14, fontFamily: FONT.MEDIUM},
            ]}>
            {item?.description}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log(item?.action, item?.id)}
        style={[styles.actionButton, {borderColor: themeColors.textColor}]}>
        <Text style={{fontSize: FONT_SIZE.F_13, fontFamily: FONT.REGULAR}}>
          {item?.action}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: themeColors.backGroundColor},
      ]}>
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.White}}>
        <HeaderCommon
          screenName="Notifications"
          isBackButton
          isManageNotifications
          showOptions
        />

        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          style={[styles.scrollContainer]}>
          <View
            style={{
              marginBottom: hp('12%'),
            }}>
            {Object?.entries(grouped)?.map(
              ([label, items]) =>
                items.length > 0 && (
                  <View key={label} style={styles.sectionContainer}>
                    <Text
                      style={[
                        styles.sectionTitle,
                        {fontSize: FONT_SIZE.F_15, fontFamily: FONT.SEMI_BOLD},
                      ]}>
                      {label}
                    </Text>

                    {items?.map(renderNotificationItem)}
                  </View>
                ),
            )}
          </View>

          {/* <View style={styles.noNotiFoundContainer}> */}
          {/* <NoNotificationsFound /> */}
          {/* </View> */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Notifications;
