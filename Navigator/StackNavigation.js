import React from 'react';
import {  createStackNavigator } from '@react-navigation/stack'
import Login from '../components/Login';
import SignUp from '../components/SignUP';
import ProfilePage from '../components/ProfilePage';
import OTPPage from '../components/OTPPage';
import Dashboard from '../components/Dashboard';
import ContactUsPage from '../components/ContactUsPage';
import AboutUsPage from '../components/AboutUsPage';
import BankDetails from '../components/BankDetails';
import QuizStartPage from '../components/QuizStartPage';
import LogoPage from '../components/LogoPage';
import SliderPage from '../components/SliderPage';
import SportQuizPage from '../components/SportQuizPage';
import GeneralKnowledgeQuizPage from '../components/GeneralKnowledgeQuizPage';
import PolityQuizPage from '../components/PolityQuizPage';
import ReasoningQuizPage from '../components/ReasoningQuizPage';
import QuizRulesPage from '../components/QuizRulesPage';
import PlayCricketQuizPage from '../components/PlayCricketQuizPage';
import GKRulesPage from '../components/GKRulesPage';
import BuyCoinsPage from '../components/BuyCoinsPage';
import MobileNoPage from '../components/MobileNoPage';
import NavigationDrawer from '../Navigator/NavigationDrawer';
import QRCodeScannerPage from '../components/QRCodeScannerPage';
import BarCodeScanPage from '../components/BarCodeScanPage';
import PaymentPage from '../components/PaymentPage';
// import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator()
const StackNavigation = () => {
    return(
        // <NavigationContainer>
        <Stack.Navigator screenOptions = {{ headerShown : false }}>
            <Stack.Screen name = "Logopage" component = { LogoPage }/>
            <Stack.Screen name = "NavigationDrawer" component = { NavigationDrawer}/>
            <Stack.Screen name = "Dashboard" component = { Dashboard }/>
            <Stack.Screen name = "ProfilePage" component = { ProfilePage }/>
            <Stack.Screen name = "OTPPage" component = { OTPPage }/>
            <Stack.Screen name = "SignUp" component = { SignUp }/>
            <Stack.Screen name = "Login" component = { Login } />
            <Stack.Screen name = "ContactUsPage" component = { ContactUsPage }/>
            <Stack.Screen name = "AboutUsPage" component = { AboutUsPage }/>
            <Stack.Screen name = "BankDetails" component = { BankDetails }/>
            <Stack.Screen name = "QuizStart" component = { QuizStartPage }/>
            <Stack.Screen name = "SliderPage" component = { SliderPage }/>
            <Stack.Screen name = "SportQuizPage" component = { SportQuizPage }/>
            <Stack.Screen name = "GeneralKnowledgeQuizPage" component = { GeneralKnowledgeQuizPage }/>
            <Stack.Screen name = "PolityQuizPage" component = { PolityQuizPage }/>
            <Stack.Screen name = "ReasoningQuizPage" component = { ReasoningQuizPage }/>
            <Stack.Screen name = "QuizRulesPage" component = { QuizRulesPage }/>
            <Stack.Screen name = "PlayCricketQuizPage" component = { PlayCricketQuizPage}/>
            <Stack.Screen name = "GKRulesPage" component = { GKRulesPage }/>
            <Stack.Screen name = "BuyCoinsPage" component = { BuyCoinsPage }/>
            <Stack.Screen name = "MobileNoPage" component = { MobileNoPage }/>
            <Stack.Screen name = "QRCodeScannerPage" component = { QRCodeScannerPage }/>
            <Stack.Screen name = "BarCodeScanPage" component = { BarCodeScanPage}/>
            <Stack.Screen name = "PaymentPage" component = { PaymentPage}/>
        </Stack.Navigator>
        // </NavigationContainer>
    );
}

export default StackNavigation;