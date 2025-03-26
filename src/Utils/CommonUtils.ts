import {I18nManager} from 'react-native';

//Go Back Screen
export const navigateBack = (navigation: any) => {
  navigation?.goBack();
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
