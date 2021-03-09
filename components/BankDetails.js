import React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import { Icon,  Input, Button} from 'react-native-elements';

class AboutUsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            accountNo : "",
            IFSCCode : "",
            branch : "",
            address : "",
            errors : {},
        }
    }

    validateForm = () => {
        let errors = {};
        let formIsValid = true;
    
        if(!this.state.accountNo) {
            errors["accountNo"] = "*Enter Account No";
            formIsValid = false;
        }
    
        if(!this.state.branch) {
            errors["branch"] = "*Enter Branch name";
            formIsValid = false;
        }
    
        if (!this.state.IFSCCode) {
            errors["IFSCCode"] = "*Enter IFSC Code";
            formIsValid = false;
        }
        if (!this.state.address) {
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
            alert("Success...")
            this.props.navigation.navigate("ProfilePage")
        }
    }
    render(){
        return(
            <View style = { styles.mainView }>
                <View style = { styles.arrowView }>
                    <Icon
                        name = 'arrow-back'
                        type = 'material'
                        color = '#517fa4'
                        onPress = { ()=> { this.props.navigation.navigate("ProfilePage")}}
                    />
                </View>
                <View style = { styles.title }>
                    <Text style = {{ fontSize : 20, color : '#517fa4'}}> User Bank Details </Text>
                </View>
                <View style = { styles.subMainView }>
                    <View style = { styles.inputView }>
                        <Input
                            placeholder = ' Account No'
                            value = { this.state.accountNo }
                            onChangeText = { (accountNo) => this.setState({ accountNo })}
                            errorMessage = { this.state.errors.accountNo }
                        />
                    </View>
                    <View style = { styles.inputView }>
                        <Input
                            placeholder = ' IFSC Code'
                            value = { this.state.IFSCCode }
                            onChangeText = { (IFSCCode) => this.setState({ IFSCCode })}
                            errorMessage = { this.state.errors.IFSCCode }
                        />
                    </View>  
                    <View style = { styles.inputView }>
                        <Input
                            placeholder = ' Branch '
                            value = { this.state.branch }
                            onChangeText = { (branch) => this.setState({ branch })}
                            errorMessage = { this.state.errors.branch }
                        />
                    </View>
                    <View style = { styles.inputView }>
                        <Input
                            placeholder = ' Address '
                            value = { this.state.address }
                            onChangeText = { (address) => this.setState({ address })}
                            errorMessage = { this.state.errors.address }
                        />
                    </View> 
                    <Button 
                            title = "save"
                            type = "solid"
                            onPress = { this.handleValidation }
                            color='#517fa4'
                            buttonStyle = {{ borderRadius : 40, backgroundColor : '#517fa4', width : 200}}
                        />
                </View>
            </View>
        )
    }
}

export default AboutUsPage;

const styles = StyleSheet.create({
    mainView : {
        flex: 1,
    },
    subMainView : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        flex: 0,
        width: 300,
        borderRadius : 20
    },
    arrowView : {
        flex : 0,
        marginTop : 30,
        marginRight : 300,
    },
    title : { 
        alignItems: 'center',
        justifyContent: 'center',
    },
   
})