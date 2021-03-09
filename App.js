
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './components/Login'
import SignUp from './components/SignUP'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './Navigator/StackNavigation'
import OTPPage from './components/OTPPage'
import Dashboard from './components/Dashboard';
import ProfilePage from './components/ProfilePage'
// import Login5 from './components/Login5';
import BarCodeScanPage from './components/BarCodeScanPage';
import MobileNoPage from './components/MobileNoPage'
export default function App() {
  return (
    // <BarCodeScanPage/>
    // <MobileNoPage/>
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
    // <OTPPage/>
    // <SignUp/>
    // <Dashboard/>
    // <ProfilePage/>
    // <Login5/>
  );
}

