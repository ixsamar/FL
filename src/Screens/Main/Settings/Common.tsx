import {I18nManager, Alert} from 'react-native';
import RNRestart from 'react-native-restart';

// Language Change from English to Arabic & Arabic to English
export const changeLanguageMode = () => {
  Alert.alert(
    I18nManager.isRTL === false ? 'تأكيد' : 'Confirmation',

    I18nManager.isRTL === false
      ? 'هل أنت متأكد أنك تريد تغيير اللغة إلى اللغة العربية؟'
      : 'Are you sure you want to change Language into English ?',
    [
      {
        text: I18nManager.isRTL === false ? 'يلغي' : 'Cancel',
        style: 'cancel',
      },
      {
        text: I18nManager.isRTL === false ? 'نعم' : 'OK',
        onPress: () => {
          I18nManager.isRTL === true
            ? leftToRightHandilor()
            : rightToLeftHandilor();
        },
      },
    ],
    {cancelable: false},
  );
};

export const rightToLeftHandilor = () => {
  try {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);

    setTimeout(() => {
      RNRestart.Restart();
    }, 100);
  } catch (error) {
    console.log(error);
  }
};

export const leftToRightHandilor = () => {
  try {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);

    setTimeout(() => {
      RNRestart.Restart();
    }, 100);
  } catch (error) {
    console.log(error);
  }
};
