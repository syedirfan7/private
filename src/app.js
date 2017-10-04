//import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  Alert,
  Image,
  Dimensions,
  Linking
} from 'react-native';
import NFC, {NfcDataType, NdefRecordType} from "react-native-nfc";
import SplashScreen from 'react-native-splash-screen';
import { Button, Icon,SideMenu, List, ListItem,Avatar } from 'react-native-elements';
import { StackNavigator,DrawerNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import themes from 'react-native-extended-stylesheet/examples/themes-dynamic/themes';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
/** adding side nav imports */
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { StackNavigator } from 'react-navigation';
import LoginScreen from './components/login';
import Drawer from './components/drawer';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const deviceScale = Dimensions.get('window').scale;
global.primaryColor = '';

const createStackNavigator = currentUser => StackNavigator({
  LoginScreen: { screen: LoginScreen },
  Drawer: { screen: Drawer },
}, {
  initialRouteName: isEmpty(currentUser) ? 'Drawer' : 'LoginScreen',
  //initialRouteName:'Drawer',
});

class App extends Component {
  render() {
    const { currentUser } = this.props;
    const Navigator = createStackNavigator(currentUser);
    return (
      <Navigator />
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  currentUser: store.currentUser,
});

export default connect(mapStateToProps)(App);




function listener(payload){
    // TODO
	popupDialog.show();
}

class HomeScreen extends React.Component {
    // componentDidMount() {
    //    SplashScreen.hide();
    //    //ToastAndroid.show(''+deviceWidth+'', ToastAndroid.SHORT);
    //    //ToastAndroid.show(''+deviceHeight+'', ToastAndroid.SHORT);
    // }

  // static navigationOptions = {
  //   title: 'SPYDER',
  //   headerLeft: <Icon 
  //   name="menu"
  //   color='white'
  //   iconStyle ={{ fontSize : 40
  //        }}
  //   />,
  //   headerRight : <Avatar
  //       medium
  //       //width ='50'
  //       //rounded
  //       source={require('../images/headerLogo@s.png')}
  //       //onPress={() => Alert.alert("Works!")}
  //       activeOpacity={0}
  //       containerStyle={{ marginRight:10 }}
  //       overlayContainerStyle={{ backgroundColor: '#df5e37' }}
  //   />,
  //   headerTintColor : '#fff',
  //   headerStyle :{
  //       backgroundColor : '#df5e37'
  //   }

  // };
  // render() {
  //   const { navigate } = this.props.navigation;
    
  //   return (
  //      <View >
  //        <View >
  //   {/* <Image  style={{
  //  // width: 250, 
  //  // height: 250,
  //   //alignSelf: "center",
  //   position: 'absolute',
  //   //justifyContent: 'center',
  //   //top:deviceHeight/6,
  //   left:deviceWidth/5.5
  //   }}
  //   //resizeMode='scale'
  //   resizeMethod='resize'
    
  //   source={require('./images/logo@s.png')}
  //       /> */}
  //        <View style= { {
  //       flexDirection: 'column',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       position : 'absolute',
  //       //top : 280,
  //       //left : 75
  //        }} >
  //           <Button
  //           title='ENABLE TAP TAG'
  //           backgroundColor='#df5e37'
  //           fontFamily = 'Arial'
  //           onPress={() => navigate('TapTag')}
  //           title="ENABLE TAP TAG"
  //           textStyle ={{
  //           fontSize : 20,
  //           fontWeight:'bold',
  //           }}
  //           />
  //     </View>
  //   </View>
  //   </View>
  //   );
  // }
}
const themeStyles = themes.createStyleSheet({
text: {
    color: '$colorText'
   },
  styleView:{
//backgroundColor: '$colorPrimary',
  },
headerBar:{
    backgroundColor: '#df5e37'
},
brandText : {
  color : '#fff',
  fontSize : 25,
  textAlign : 'left'
},
enableButton : {
    position: 'absolute',
    justifyContent: 'center',
    top:200,
    left:0,

},
stretch: {
    width: '$photoWidth',
    height: 50,
  },
buttonView : {
    height : 50,
    width : 100
  }
});

// const SimpleApp = DrawerNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// });
// class TapTagScreen extends React.Component {
    
//   static navigationOptions = {
//     title: 'TAP THE TAG',
//     headerTintColor : '#fff',
//     headerRight : <Avatar
//         medium
//         rounded
//         source={require('../src/components/images/Tap-tag@hdpi.png')}
//         onPress={() => Alert.alert("Works!")}
//         activeOpacity={0.7}
//         containerStyle={{ marginRight:10}}
//     />,
//     headerStyle :{
//      backgroundColor : '#df5e37'
//     }

//   };

//   componentDidMount(){
//       this.bindNfcListener();
//     }
 
//     bindNfcListener(){
      
//       NFC.addListener((payload) => {
// // ToastAndroid.show('A tag appeared now !', ToastAndroid.SHORT);
// switch (payload.type) {
//      case NfcDataType.NDEF:
//      let messages = payload.data;
//      for (let i in messages) {
//      let records = messages[i];
//      for (let j in records) {
//      let r = records[j];
//      if (r.type === NdefRecordType.TEXT) {
//      ToastAndroid.show('text appeared now !', ToastAndroid.SHORT);
//      // do something with the text data 
//       } else {
//               this.popupDialog.show();
//               primaryColor=r;
//               //Alert.alert(primaryColor.data);
//     //   Alert.alert('TAG Summary Screen'+'\n','SMARTRAC Found'+'\n'+'Validated Rolling Code'+'\n'+'Type : '+r.type +"\n" + 'Data :'+ r.data ,
//     //     [
//     //       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
//     //       {text: 'Open Link', onPress: () => Linking.openURL(r.data).catch(err => console.error('An error occurred', err))},
//     //    ],
//     //     { cancelable: false }
//     //  )
//     }    }    }
//     break;
            
//         case NfcDataType.TAG:
//            ToastAndroid.show(
//                 `The TAG is non-NDEF:\n\n${payload.data.description}`,
//                 ToastAndroid.SHORT
//             );
//             break;
//     }
 
// });
//     }
//   render() {
//     const { navigate } = this.props.navigation;
      
//     return (
//       <View>

//         <Image  style={{
//     width: deviceWidth / 1.5,
//     height: deviceWidth / 1.5,
//     //alignSelf: "center",
//     position: 'absolute',
//     //justifyContent: 'center',
//     top:deviceHeight/6,
//     left:deviceWidth/6

//     }}
//           //resizeMode='center'
//           source={require('../src/components/images/Tap-tag@hdpi.png')}
//         />
//         <Text style={{
//             textAlign : 'center',
//             position: 'absolute',
//             top:deviceHeight/1.5,
//             left:deviceWidth/4,
//             fontSize : 19
//         }}>TAP THE <Text style={{
//           color:'#df5e37'
//         }}>TAG</Text> PLEASE</Text>
     
//       <PopupDialog
//     ref={(popupDialog) => { this.popupDialog = popupDialog; }}
//   >
//     <View>
//       <Text>{primaryColor.data}</Text>
//     </View>
//   </PopupDialog>

//       </View>
//     );
//   }

  
// }
class TagDetailsScreen extends React.Component {
  
  static navigationOptions = {
    title: 'TAG DETAILS',
    headerTintColor : '#fff',
    headerStyle :{
        backgroundColor : '#df5e37'
    }

  };
  render() {
    return (
      <View>
        <Text style={{
            textAlign : 'center'
        }}>TAP THE TAG PLEASE</Text>
      </View>
    );
  }

  
    
}
// const SimpleApp = StackNavigator({
//   Home: { screen: HomeScreen },
//   TapTag: { screen: TapTagScreen },
//   TagDetails:{ screen : TagDetailsScreen},

// });

//AppRegistry.registerComponent('AwesomeProject', () => App);