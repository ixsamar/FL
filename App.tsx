import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Routes from './src/Routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {FontProvider, ThemeProvider} from './src/Utils/Globles';
import {setupStore} from './src/Store/store';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <Provider store={setupStore()}>
        <GestureHandlerRootView style={{flex: 1}}>
          <ThemeProvider>
            <FontProvider>
              <Routes />
            </FontProvider>
          </ThemeProvider>
        </GestureHandlerRootView>
      </Provider>
    </View>
  );
};

export default App;
