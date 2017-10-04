
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
  Linking,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export const getNavigationOptions = (title, backgroundColor, color) => ({
  title,
  headerTitle: 'HEllo',
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color,
  },
  headerTintColor: color,
 // headerLeft: <Icon name='home' size={20} /> 
});

export const getNavigationOptionsWithAction = (title, backgroundColor, color, headerLeft) => ({
  title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color,
  },
  headerTintColor: color,
  headerLeft ,
});

export const getDrawerNavigationOptions = (title, backgroundColor, titleColor, drawerIcon) => ({
  title,
  headerTitle: title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color: titleColor,
  },
  headerTintColor: titleColor,
  drawerLabel: title,
  drawerIcon,
});

export const getDrawerConfig = (drawerWidth, drawerPosition, initialRouteName) => ({
  drawerWidth,
  drawerPosition,
  initialRouteName,
});
