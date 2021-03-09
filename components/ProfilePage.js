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
    Button
} from 'react-native-elements';



class ProfilePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName : "",
            lastName : "",
            email : "",
            address : "",
            errors : {},
        }
    }

    validateForm = () => {
        let errors = {};
        let formIsValid = true;
    
        if(!this.state.firstName) {
            errors["firstName"] = "*Enter first name";
            formIsValid = false;
        }
    
        if(!this.state.lastName) {
            errors["lastName"] = "*Enter last name";
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
    
        if(!this.state.address) {
            errors["address"] = "*Enter Address";
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
            this.props.navigation.navigate("Dashboard")
        }
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
                <View style = { styles.userView }>
                    <Icon
                        reverse
                        name='account-circle'
                        type='material'
                        // color=''
                    />
                </View>
                <View style = { styles.infoView }>
                <View style = { styles.nameView }>
                    <View style = { styles.fnameView }>
                        <Input
                            placeholder = '  First Name'
                            value = { this.state.firstName }
                            onChangeText = { (firstName) => this.setState({ firstName })}
                            errorMessage = { this.state.errors.firstName}  
                        />
                    </View>
                    <View style = { styles.lnameView }>
                        <Input
                            // style = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            placeholder = '  Last Name'
                            value = { this.state.lastName }
                            onChangeText = { (lastName) => this.setState({ lastName })}
                            errorMessage = { this.state.errors.lastName }  
                        />
                    </View>
                </View>
                <View style = { styles.emailView }>
                    <Input
                        placeholder = ' Email ID'
                        value = { this.state.email }
                        onChangeText = { (email) => this.setState({ email })}
                        errorMessage = { this.state.errors.email }
                    />
                </View>
                <View style = { styles.addressView }>
                    <Input
                        placeholder = ' Address'
                        value = { this.state.address }
                        onChangeText = { (address) => this.setState({ address })}
                        errorMessage = { this.state.errors.address }
                    />
                </View> 
                <View style = { styles.logSaveView }>
                    <View style = { styles.logoutView }>
                        <Button 
                            title = "Log out"
                            type = "solid"
                            onPress = { ()=> { this.props.navigation.navigate("Dashboard")} }
                            buttonStyle = {{ borderRadius : 40, backgroundColor : 'black'}}
                        />
                    </View>
                    <View style = { styles.saveView }>
                        <Button 
                            title = "save"
                            type = "solid"
                            onPress = { this.handleValidation }
                            color='#517fa4'
                            buttonStyle = {{ borderRadius : 40, backgroundColor : 'black'}}
                        />
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
        width: 100,
    },
    saveView : {
        flex: 0,
        width: 100,
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

