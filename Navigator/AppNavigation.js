import React from 'react';
import {  createStackNavigator } from '@react-navigation/stack'
import Login from '../components/Login';
import SignUp from '../components/SignUP';

const Stack = createStackNavigator()

const AppNavigation = () => {
    return(
        <Stack.Navigator screenOptions = {{ headerShown : false }}>
            <Stack.Screen name = "SignUp" component = { SignUp }/>
            <Stack.Screen name = "Login" component = { Login } />
        </Stack.Navigator>
    );
}

export default AppNavigation;