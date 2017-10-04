import React, { Component } from 'react';
import { Button, Icon,SideMenu, List, ListItem,Avatar } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  Alert
} from 'react-native';
import * as Colors from '../../themes/colors';
import * as ducks from '../../ducks';
import { connect } from 'react-redux';

class HomeScreen extends Component {
login() {
    const { updateCurrentUser } = this.props;
    updateCurrentUser({ name: 'carol '});
    console.log('login');
  }
static navigationOptions = {
    title: 'SPYDER',
    headerLeft: <Avatar
        medium
        //width ='50'
        //rounded
        source={require('../images/headerLogo@s.png')}
        //onPress={() => Alert.alert("Works!")}
        activeOpacity={0}
        containerStyle={{ marginRight:10 }}
        overlayContainerStyle={{ backgroundColor: '#df5e37' }}
    />,
    // headerRight : <Avatar
    //     medium
    //     //width ='50'
    //     //rounded
    //     source={require('../images/headerLogo@s.png')}
    //     //onPress={() => Alert.alert("Works!")}
    //     activeOpacity={0}
    //     containerStyle={{ marginRight:10 }}
    //     overlayContainerStyle={{ backgroundColor: '#df5e37' }}
    // />,
    headerTintColor : '#fff',
    headerStyle :{
        backgroundColor : '#df5e37'
    }

  };
  render() {
    const { navigate } = this.props.navigation;
    
    return (
<View >
  <View >
     <View style= { {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position : 'absolute',
        top : 240,
        left : 75
         }} >
        <Button
           title='ENABLE TAP TAG'
           backgroundColor='#df5e37'
           fontFamily = 'Arial'
           onPress={() => this.login()}
           title="ENABLE TAP TAG"
           textStyle ={{
           fontSize : 20,
           fontWeight:'bold',
          }}
        />
      </View>
   </View>
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

const mapStateToProps = store => ({
  currentUser: store.currentUser,
});

const mapDispatchToProps = {
  updateCurrentUser: ducks.updateCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
