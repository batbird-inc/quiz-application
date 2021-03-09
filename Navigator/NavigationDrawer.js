// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// import AboutUsPage from '../components/AboutUsPage';
// import ContactUsPage from '../components/ContactUsPage';
// import ProfilePage from '../components/ProfilePage';

// const menuPages = createStackNavigator({
//     AboutUsPage : { screen : AboutUsPage, navigationOptions : { header : null}},
//     ContactUsPage : { screen : ContactUsPage, navigationOptions : { header : null}},
//     ProfilePage : { screen : ProfilePage, navigationOptions : { header : null}}
// })

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutUsPage from '../components/AboutUsPage';
import ContactUsPage from '../components/ContactUsPage';
import ProfilePage from '../components/ProfilePage';

const Drawer = createDrawerNavigator();
    const NavigationDrawer =()=> {
        return (
            
                <Drawer.Navigator initialRouteName="AboutUsPage">
                    <Drawer.Screen name="AboutUsPage" component={ AboutUsPage} />
                    <Drawer.Screen name="ContactUsPage" component={ContactUsPage} />
                </Drawer.Navigator>
            
    );
}
export default NavigationDrawer