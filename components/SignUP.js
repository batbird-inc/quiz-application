import React from 'react';
import { 
    Button, 
    ThemeProvider,
    Input 
  } from 'react-native-elements';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
} from 'react-native';
import viku from './../assets/mi.jpeg'
import { styles } from '../Css/LoginCSS'
 class SignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        firstName : '',
        lastName : '',
        email : '',
        mobileNo : '',
        password : '',
        confirm: '',
        visibleIcon : false,
        errors : {}
    };
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

    if(!this.state.mobileNo) {
        errors["mobileNo"] = "*Enter last name";
        formIsValid = false;
    }

    if (typeof this.state.password !== "undefined") {
        if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Enter secure and strong password.";
        }
    }

    if (!this.state.password) {
        errors["password"] = "*Enter password";
        formIsValid = false;
    }

    if (typeof this.state.confirm !== "undefined") {
        if (this.state.confirm !== this.state.password) {
            formIsValid = false;
            errors["confirm"] = "*Password does not match.";
        }
      }
  
      if (!this.state.confirm) {
        errors["confirm"] = "*Enter password";
        formIsValid = false;
      }
  

    this.setState({
        errors: errors
    })

    return formIsValid
}

loginPage(){
    alert("Login Page Loading...")
    this.props.navigation.navigate("Login")
}
registration  = (event) => {
    event.preventDefault();
    if(this.validateForm()){
      this.props.navigation.navigate("OTPPage")
    }
}

 render(){
   return(
     <View style = { styles.mainContainer }>
          <View style = { styles.inputContainer }>

            <View style = { styles.inputView }>
              <Input
                placeholder = 'First Name'
                value = { this.state.username }
                onChangeText = { (firstName) => this.setState({ firstName })}
                errorMessage = { this.state.errors.firstName}  
              />
              </View>

              <View style = { styles.inputView2 }>
                <Input
                  placeholder = 'Last Name'
                  value = { this.state.lastName }
                  onChangeText = { (lastName) => this.setState({ lastName })}
                  errorMessage = { this.state.errors.lastName }
                />
              </View>

              <View style = { styles.inputView2 }>
                <Input
                  placeholder = 'Email ID'
                  value = { this.state.email }
                  onChangeText = { (email) => this.setState({ email })}
                  errorMessage = { this.state.errors.email }
                />
              </View>

              <View style = { styles.inputView2 }>
                <Input
                  placeholder = 'Mobile No'
                  value = { this.state.mobileNo }
                  onChangeText = { (mobileNo) => this.setState({ mobileNo })}
                  errorMessage = { this.state.errors.mobileNo }
                />
              </View>

              <View style = { styles.inputView2 }>
                <Input
                placeholder = 'Password'
                value = { this.state.password }
                onChangeText = { (password) => this.setState({ password })}
                errorMessage = { this.state.errors.password}  
                />
              </View>

              <View style = { styles.inputView2 }>
                <Input
                placeholder = 'Confirm Password'
                value = { this.state.confirm }
                onChangeText = { (confirm) => this.setState({ confirm })}
                errorMessage = { this.state.errors.confirm}  
                />
              </View>
              <View style = {{ alignContent : 'center',   width : '80%' }}>
                <Button  
                  title = "Registration"
                  type = "solid"
                  buttonStyle = {{ borderRadius : 40, backgroundColor : '#517fa4', width : 200, marginTop : 10}}
                  onPress = { this.registration }
                />  
              </View>
              <View style = {{ alignContent : 'center', marginTop : 10, width : '80%' }}>
                <Button 
                  title = " Login"
                  onPress = { ()=> this.props.navigation.navigate("Login") }
                  type = "solid"
                  buttonStyle = {{ borderRadius : 40, backgroundColor : '#517fa4', width : 200, marginTop : 10}}
                />
              </View>
          </View>
     </View>
   )
 }
    
}
  export default SignUp