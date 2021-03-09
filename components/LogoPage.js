import React from 'react';
import { View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
class LogoPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isLogo : false,
            isLogin : ''
        }
    }

    async componentDidMount (){
        this.setState({ isLogin : await AsyncStorage.getItem('isLogin')})
        if( this.state.isLogin == null || this.state.isLogin == undefined){
            console.log(" IsLogin null :- ",this.state.isLogin);
            setTimeout(()=>{
                this.props.navigation.navigate("MobileNoPage")
            },2000)
        }
        else {
            console.log(" IsLogin :- ",this.state.isLogin);
            setTimeout(()=>{
                this.props.navigation.navigate("Dashboard")
            },2000)
        }    
    }
    
    render(){
        return(
            <View style = {{ flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                <Image style = {{ height : '100%', width : '100%' }} source = { require('../assets/dime.jpeg')}/>
            </View>
        )
    }
}

export default LogoPage