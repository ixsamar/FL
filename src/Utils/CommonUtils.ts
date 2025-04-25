import {I18nManager} from 'react-native';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';

//Go Back Screen
export const navigateBack = () => {
  // const navigation = useNavigation();

  console.log('called');

  // navigation.goBack();
};

//Get Language Type
// export const getLanguage = () => {
//   return !I18nManager.isRTL ? 'EN' : 'AR';
// };

export const getLanguage = () => {
  if (I18nManager.isRTL) {
    return 'AR';
  }
  return 'EN';
};

//Data Formates
export const dateFormat = (date: string, format: string = 'YYYY-MM-DD') => {
  const dateString = dayjs(date)?.format(format);
  if (dateString !== 'Invalid Date') {
    return dayjs(date).format(format) || '';
  }
  return '';
};

export const dateFormatHours = (
  date: string,
  format: string = 'DD-MMM-YYYY hh:mm A',
) => {
  const dateString = dayjs(date)?.format(format);
  if (dateString !== 'Invalid Date') {
    return dayjs(date).format(format) || '';
  }
  return '';
};

export const dateYearFormat = (date: string, format: string = 'YYYY') => {
  const dateString = dayjs(date)?.format(format);
  if (dateString !== 'Invalid Date') {
    return dayjs(date).format(format) || '';
  }
  return '';
};

export const dateDayFormat = (date: string | null | undefined) => {
  return date ? dayjs(date).format('DD') : '';
};

export const formatTimestamp = (timestamp: any) => {
  return dayjs(timestamp).format('hh:mm A');
};
