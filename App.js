import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default function App() {
  return (
    <Appcontainer/>
  );
}
const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  Drawer: {screen: AppDrawerNavigator}
})
const Appcontainer = createAppContainer(SwitchNavigator);