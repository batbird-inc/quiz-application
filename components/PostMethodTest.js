import React from 'react';
import {
    View,
    // Button,
    Text,
    StyleSheet
} from 'react-native';
import {
    Input,
    Icon,
} from 'react-native-elements';
import { Button } from 'react-native-paper'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { saveMobile } from './HTTPService';



class PostMethodTest extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : "",
            errors : {},
            postId : ''
        }
        //  var obj = new object();
        // this.objHTTP = new HTTPService();
    }



    async componentDidMount(){
    
    }

    validateForm = () => {
        let errors = {};
        let formIsValid = true;
    
        if(!this.state.name) {
            errors["name"] = "*Enter full name";
            formIsValid = false;
        }
    
        this.setState({
            errors: errors
        })
    
        return formIsValid
    }

    handleValidation = async() =>{

        // var obj = new HTTPService();
            // var obj = new Demo.object();
        // obj.post()

       saveMobile('http://batbird.in/api/index.php',this.state.name)
        
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ mobile : this.state.name })
        // };
        // const response = await fetch('http://batbird.in/api/index.php', requestOptions)
        // const data = await response.json();
        // this.setState({ postId: data.id });
        // console.log("post id is ",response);

        // console.log(" Name is :- ",this.state.name);
        // var mobileNo = this.state.name
        // axios({
        //     method : 'post',
        //     headers : {
        //         'Content-Type': 'application/json'
        //         },
        //     url : 'http://batbird.in/api/index.php', 
        //     data : {
        //         mobile : mobileNo,
        //         }
        //     })
        //   .then(function (response) {
        //     console.log(response.data);
        //   })
    }

    handleUsersData = async () => {
        let userData = await axios.post('https://www.batbird.in/api/profile.php?usermobile='+this.state.isLogin+'&username='+this.state.name+'&useremail='+this.state.email)
        console.log(" User Profile is :- ", userData.data);
    }
    render(){
        return(
            <View style = { styles.mainView }>
                    <View style = { styles.infoView }>
                        <View style = { styles.emailView }>
                            {/* <Input
                                placeholder = ' Full Name'
                                value = { this.state.name }
                                onChangeText = { (name) => this.setState({ name })}
                                errorMessage = { this.state.errors.name }
                                style = {{ color : 'white'}}
                            /> */}
                        </View>
                        <View style = { styles.emailView }>
                            <Input
                                placeholder = ' Email ID'
                                value = { this.state.name }
                                onChangeText = { (name) => this.setState({ name })}
                                // errorMessage = { this.state.errors.email }
                                style = {{ color : 'white', marginTop : 100}}
                            />
                        </View> 
                    </View>
                <View style = { styles.logSaveView }>
                    <View style = { styles.saveView }>
                        <Button 
                           mode = "contained"
                           style = {{  borderRadius : 5, backgroundColor : '#49078f',}}
                            onPress = { this.handleValidation }
                            
                        > Save</Button>
                    </View> 
                </View>
            </View>
        )
    }
}
export default PostMethodTest;

const styles = StyleSheet.create({
    mainView : {    
        flex: 1,
        backgroundColor : '#1d1d1d'
    },
    nameView : {    
        flex: 0,
        flexWrap : 'wrap',
        flexDirection : 'row',
        justifyContent : 'space-around',

    },
    fnameView : {    
        flex: 0,
        width: 150,
        borderRadius : 20,
    },
    lnameView : {    
        flex: 0,
        width: 150,
        borderRadius : 20,
    },
    emailView : {
        flex: 0,
        width: 300,
        borderRadius : 20,
    },
    addressView : {
        flex: 0,
        width: 300,
        borderRadius : 20,
    },
    logoutView : {
        flex: 0,
        width: 130,
    },
    saveView : {
        flex: 0,
        width: 130,
    },
    logSaveView : {
        flex: 0,
        width : 300,
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginBottom : 10,
    },
    aboutView : {
        flex : 0,
        width : 100,
        borderRadius : 20,
        backgroundColor : 'white',
    },
    contactView : {
        flex : 0,
        width : 100,
        borderRadius : 20,
        backgroundColor : 'white',
    },
    aboconView : {
        flex: 0,
        width : 300,
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginBottom : 10,
    },
    bankView : {
        flex : 0,
        width : 300,
        borderRadius : 20,
    },
    arrowView : {
        flex : 0,
        marginTop : 50,
        marginRight : 300,
    },
    userView : {
        flex : 0,
        alignItems : 'center',
        justifyContent : 'center',
    },
    infoView : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleView : {
        alignItems: 'center',
        justifyContent: 'center',
    },


})

