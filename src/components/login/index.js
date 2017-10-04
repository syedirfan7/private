import React, { Component } from 'react';
//import { StackNavigator,DrawerNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  AsyncStorage,
  Image,
  Dimensions,
  Alert,
  Linking
} from 'react-native';
import NavBarItem from '../common/NavBarItem';
import NFC, {NfcDataType, NdefRecordType} from "react-native-nfc";
import { Button, Icon,SideMenu, List, ListItem,Avatar } from 'react-native-elements';
import * as Colors from '../../themes/colors';
import { getNavigationOptions } from '../../utils/navigation';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions, getDrawerConfig } from '../../utils/navigation';
import * as ducks from '../../ducks';
import { connect } from 'react-redux';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const getDrwItem = navigation => (
  <NavBarItem
    iconName="arrow-left"
    onPress={() => {
      if (navigation.state.index === 0) {
        // check if drawer is not open, then only open it
        navigation.navigate('DrawerOpen');
      } else {
        // else close the drawer
        navigation.navigate('DrawerClose');
      }
    }}
  />
);



 class LoginScreen extends Component {
  logout() {
   Alert.alert('logout');
    const { updateCurrentUser } = this.props;
    updateCurrentUser({});
    // const { updateCurrentUser } = this.props;
    // updateCurrentUser({ name: ''});
    console.log('logout');
  }


//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={[styles.input, { borderColor: Colors.primary }]}>
//           <TouchableOpacity style={styles.btnSubmit} onPress={() => this.login()}>
//             <Text style={{ textAlign: 'center', color: Colors.primary }}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }

  
  
// static navigationOptions = {
//     title: 'TAP THE TAG',
//     headerTintColor : '#fff',
//     headerLeft : <Avatar
//         medium
//         rounded
//         source={require('../images/Tap-tag@hdpi.png')}
//         //onPress={() => Alert.alert("Works!")}
//         onPress={() => this.logout()}
//         activeOpacity={0.7}
//         containerStyle={{ marginRight:10}}
//     />,
//     headerStyle :{
//      backgroundColor : '#df5e37'
//     }

//   };

  componentDidMount(){
      this.bindNfcListener();
    }
 
    bindNfcListener(){
      
      NFC.addListener((payload) => {
// ToastAndroid.show('A tag appeared now !', ToastAndroid.SHORT);
switch (payload.type) {
     case NfcDataType.NDEF:
     let messages = payload.data;
     for (let i in messages) {
     let records = messages[i];
     for (let j in records) {
     let r = records[j];
     if (r.type === NdefRecordType.TEXT) {
     ToastAndroid.show('text appeared now !', ToastAndroid.SHORT);
     // do something with the text data 
      } else {
             // this.popupDialog.show();
              //primaryColor=r;
              //Alert.alert(primaryColor.data);
      Alert.alert('TAG Summary Screen'+'\n','SMARTRAC Found'+'\n'+'Validated Rolling Code'+'\n'+'Type : '+r.type +"\n" + 'Data :'+ r.data ,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'Open Link', onPress: () => Linking.openURL(r.data).catch(err => console.error('An error occurred', err))},
       ],
        { cancelable: false }
     )
    }    }    }
    break;
            
        case NfcDataType.TAG:
           ToastAndroid.show(
                `The TAG is non-NDEF:\n\n${payload.data.description}`,
                ToastAndroid.SHORT
            );
            break;
    }
 
});
    }
  render() {
    const { navigate } = this.props.navigation;
      
    return (
      <View>

        <Image  style={{
    width: deviceWidth / 1.5,
    height: deviceWidth / 1.5,
    //alignSelf: "center",
    position: 'absolute',
    //justifyContent: 'center',
    top:deviceHeight/6,
    left:deviceWidth/6

    }}
          //resizeMode='center'
          source={require('../images/Tap-tag@hdpi.png')}
        />
        <Text style={{
            textAlign : 'center',
            position: 'absolute',
            top:deviceHeight/1.5,
            left:deviceWidth/4,
            fontSize : 19
        }}>TAP THE <Text style={{
          color:'#df5e37'
        }}>TAG</Text> PLEASE</Text>
     
             {/* <PopupDialog
    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
  >
    <View>
      <Text>{primaryColor.data}</Text>
    </View>
  </PopupDialog> */}

      </View>
    );
  }

  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btnSubmit: {
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

//LoginScreen.navigationOptions = ({ navigation }) => getNavigationOptions('TAP THE TAG', Colors.primary, 'white');
LoginScreen.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('TAP THE TAG', Colors.primary, 'white', getDrwItem(navigation));
const mapStateToProps = store => ({
  currentUser: store.currentUser,
});

const mapDispatchToProps = {
  updateCurrentUser: ducks.updateCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
