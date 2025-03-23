import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import Routes from './src/Routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {FontProvider, ThemeProvider} from './src/Utils/Globles';
import {setupStore} from './src/Store/store';

const App = () => {
  return (
    <>
      {/* <StatusBar barStyle={'light-content'} /> */}
      <Provider store={setupStore()}>
        <GestureHandlerRootView style={{flex: 1}}>
          <ThemeProvider>
            <FontProvider>
              <Routes />
            </FontProvider>
          </ThemeProvider>
        </GestureHandlerRootView>
      </Provider>
    </>
  );
};

export default App;
