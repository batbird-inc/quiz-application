
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './components/Login'
import SignUp from './components/SignUP'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './Navigator/AppNavigation'
import HomePage from './components/HomeApp'
export default function App() {
  const data = ['vikas', 'gaju']
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    // <HomePage/>
    // <SignUp/>
    
  );
}

