import React, {useEffect} from 'react';
import store from './src/Redux/store';
import Navigation from './src/Navigation/Navigation';
import {Provider} from 'react-redux';
import {ToastProvider} from 'react-native-toast-notifications';
import 'react-native-gesture-handler';
import BootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    const init = async () => {};
    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <Provider store={store}>
      <ToastProvider
        placement="top"
        duration={1000}
        successColor="green"
        dangerColor="red">
        <Navigation />
      </ToastProvider>
    </Provider>
  );
};

export default App;
