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



class ProfilePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : "",
            email : "",
            address : "",
            errors : {},
            isLogin : '',
            usersData : []
        }
    }

    async componentDidMount(){
        this.setState({ isLogin : await AsyncStorage.getItem('isLogin')})
        this.getUsersDetails()
    }

    async getUsersDetails(){
        let gusers = await axios.get('https://www.batbird.in/api/profile_show.php?usermobile='+this.state.isLogin)
        this.setState({ usersData : gusers.data.data})
        console.log(" Users Details :- ",this.state.usersData);
    }

    validateForm = () => {
        let errors = {};
        let formIsValid = true;
    
        if(!this.state.name) {
            errors["name"] = "*Enter full name";
            formIsValid = false;
        }
    
        if (typeof this.state.email !== "undefined") {
            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.email)) {
                formIsValid = false;
                errors["email"] = "*Enter valid email-ID.";
            }
        }
    
        if (!this.state.email) {
            errors["email"] = "*Enter email id";
            formIsValid = false;
        }

        this.setState({
            errors: errors
        })
    
        return formIsValid
    }

    handleValidation = () =>{
        // event.preventDefault();
        if(this.validateForm()){
            console.log(" Users Ok...");
            this.handleUsersData()
            // this.props.navigation.navigate("Dashboard")
        }
    }

    handleUsersData = async () => {
        console.log(" isLoogin Profile :- ",this.state.isLogin);
        let userData = await axios.post('https://www.batbird.in/api/profile.php?usermobile='+this.state.isLogin+'&username='+this.state.name+'&useremail='+this.state.email)
        console.log(" User Profile is :- ", userData.data);
        console.log("https://www.batbird.in/api/profile.php?usermobile= "+this.state.isLogin+"username= "+this.state.name+"useremail= "+this.state.email);
    }
    render(){
        return(
            <View style = { styles.mainView }>
                <View style = { styles.arrowView }>
                    <Icon
                        // reverse
                        name = 'arrow-back'
                        type = 'material'
                        color = 'white'
                        onPress = { ()=> { this.props.navigation.navigate("Dashboard")}}
                    />
                </View>
                <View style = { styles.titleView }>
                    <Text style = {{ fontSize : 20, color : 'white'}}> Edit Profile</Text>
                </View>
                {
                    // this.state.usersData.length>0 ? 
                    // <View>
                    //     {
                    //         this.state.usersData.map((item, index)=>{
                    //             return( 
                    //             <View style = { styles.infoView } key = { index }>
                    //                 <View style = { styles.emailView }>
                    //                     <Input
                    //                         value = { item.username }
                    //                         onChangeText = { (name) => this.setState({ name })}
                    //                         // errorMessage = { this.state.errors.name }
                    //                         style = {{ color : 'white'}}
                    //                     /> 
                    //                 </View>
                    //                 <View style = { styles.emailView }>
                    //                     <Input
                    //                         value = { item.useremail }
                    //                         onChangeText = { (email) => this.setState({ email })}
                    //                         // errorMessage = { this.state.errors.email }
                    //                         style = {{ color : 'white'}}
                    //                     /> 
                    //                 </View> 
                    //             </View>
                    //             )})
                  
                    //     }
                    // </View> : 
                    <View style = { styles.infoView }>
                        <View style = { styles.emailView }>
                            <Input
                                placeholder = ' Full Name'
                                value = { this.state.name }
                                onChangeText = { (name) => this.setState({ name })}
                                errorMessage = { this.state.errors.name }
                                style = {{ color : 'white'}}
                            />
                        </View>
                        <View style = { styles.emailView }>
                            <Input
                                placeholder = ' Email ID'
                                value = { this.state.email }
                                onChangeText = { (email) => this.setState({ email })}
                                errorMessage = { this.state.errors.email }
                                style = {{ color : 'white'}}
                            />
                        </View> 
                    </View>
                } 
                
                {/* <View style = { styles.userView }>
                    <Icon
                        reverse
                        name='account-circle'
                        type='material'
                        // color=''
                    />
                </View> */}
                {/* <View style = { styles.infoView }>
                    <View style = { styles.emailView }>
                        <Input
                            placeholder = ' Full Name'
                            value = { this.state.name }
                            onChangeText = { (name) => this.setState({ name })}
                            errorMessage = { this.state.errors.name }
                            style = {{ color : 'white'}}
                        />
                    </View>
                    <View style = { styles.emailView }>
                        <Input
                            placeholder = ' Email ID'
                            value = { this.state.email }
                            onChangeText = { (email) => this.setState({ email })}
                            errorMessage = { this.state.errors.email }
                            style = {{ color : 'white'}}
                        />
                    </View> 
                </View> */}
                <View style = { styles.logSaveView }>
                    <View style = { styles.saveView }>
                        <Button 
                           mode = "contained"
                           style = {{  borderRadius : 5, backgroundColor : '#49078f',}}
                            onPress = { this.handleValidation }
                            
                        > Save</Button>
                    </View> 
                </View>
                {/* <View style = { styles.aboconView }> */}
                    {/* <View style = { styles.aboutView }>
                        <Button 
                            title = "about us"
                            type = "solid"
                            buttonStyle = {{ borderRadius : 40, backgroundColor : 'black'}}
                            onPress = { ()=> { this.props.navigation.navigate("AboutUsPage")} }
                        />
                    </View> */}
                    {/* <View style = { styles.contactView }>
                        <Button 
                            title = "contact us"
                            type = "solid"
                            color='#517fa4'
                            buttonStyle = {{ borderRadius : 40, backgroundColor : 'black'}}
                            onPress = { ()=> { this.props.navigation.navigate("ContactUsPage")} }
                        />
                    </View> */}
                {/* </View> */}
                <View style = { styles.bankView }>
                        <Button 
                            title = " Bank details"
                            type = "clear"
                            onPress = { ()=> { this.props.navigation.navigate("BankDetails")} }
                        />
                    </View>
                
            </View>
        )
    }
}
export default ProfilePage;

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

