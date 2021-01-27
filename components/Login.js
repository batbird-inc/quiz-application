import React from 'react';
import { 
    // Button, 
    ThemeProvider,
    Input 
  } from 'react-native-elements';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    TouchableOpacity, 
    Button
} from 'react-native';
import viku from './../assets/mi.jpeg'
import { styles } from '../Css/LoginCSS'
 class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        userName : '',
        password : '',
        visibleIcon : false,
        errors : {}
    };
  }

  validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (typeof this.state.userName !== "undefined") {
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.userName)) {
            formIsValid = false;
            errors["userName"] = "*Enter valid User Name.";
        }
    }

    if (!this.state.userName) {
        errors["userName"] = "*Enter User Name";
        formIsValid = false;
    }

    if (typeof this.state.password !== "undefined") {
        if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Incurrect password.";
        }
    }

    if (!this.state.password) {
        errors["password"] = "*Enter password";
        formIsValid = false;
    }

    
    this.setState({
        errors: errors
    })

    return formIsValid
}

 render(){
   return(
     <View style = { styles.mainContainer }>
          <View style = { styles.inputContainer }>
            <View style = { styles.inputView }>
              <Input
                // style = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder = '  User Name'
                value = { this.state.userName }
                onChangeText = { (userName) => this.setState({ userName })}
                errorMessage = { this.state.errors.userName}  
              />
            </View>
            <View style = { styles.inputView2 }>
              <Input
                // style = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder = '  Password'
                value = { this.state.password }
                onChangeText = { (password) => this.setState({ password })}
                errorMessage = { this.state.errors.password }
              />
            </View>
            <View style = { styles.loginView }>
              <Button  
              title = "Login"
              onPress = { this.validateForm }
              />  
            </View>
        </View>
     </View>
   )
 }
    
}
  export default Login