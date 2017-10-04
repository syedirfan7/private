import React from 'react';
import {NetInfo, ToastAndroid}  from 'react-native';
import { Provider } from 'react-redux';
import App from './app';
import createStore from './createStore';
import SplashScreen from 'react-native-splash-screen';


NetInfo.isConnected.fetch().then(isConnected => {
  console.log('First, is ' + (isConnected ? 'online' : 'offline'));

  ToastAndroid.show(('First, is ' + (isConnected ? 'online' : 'offline')), ToastAndroid.SHORT);
});
function handleFirstConnectivityChange(isConnected) {
  console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
  NetInfo.isConnected.removeEventListener(
    'change',
    handleFirstConnectivityChange
  );
}
NetInfo.isConnected.addEventListener(
  'change',
  handleFirstConnectivityChange
);
class Main extends React.Component {
  componentDidMount() {
       SplashScreen.hide();
       //ToastAndroid.show(''+deviceWidth+'', ToastAndroid.SHORT);
       //ToastAndroid.show(''+deviceHeight+'', ToastAndroid.SHORT);
    }

  render() {
    const store = createStore();
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Main;
    