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
import firebase from '../FirebaseServices/Config';
import axios from 'axios';
 class HomePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        mobileNo : '',
        visibleIcon : false,
        isOTP : false,
        errors : {},
        data : []
    };
  }

  validateMobileNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    return regexp.test(this.state.phone)
  }

  validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if(!this.state.mobileNo) {
        errors["mobileNo"] = "*Enter Mobile Number";
        formIsValid = false;
    }

    if(!this.validateMobileNumber)
    {
       formIsValid = false;
       errors["mobileNo"] = "*Enter Valid Mobile Number"
    }
    this.setState({
        errors: errors
    })

    return formIsValid
}
registration  = (event) => {
    event.preventDefault();
    if(this.validateForm()){
        console.log("Success...");
        this.getApiData()
        // firebase.auth().verifyPhoneNumber('+4423456789')
        // .on('state_changed', (phoneAuthSnapshot) => {
        // console.log('Snapshot state: ', phoneAuthSnapshot);
        // }, (phoneAuthError) => {
        //  console.error('Error: ', phoneAuthError);
        // });
        // firebase
        // .database()
        // .ref('users/')
        // .set({
        //  mobileNo : this.state.mobileNo
        // });
        }
}

async getApiData()
{
    console.log(" Mobile No is : ",this.state.mobileNo);
    let resp = await axios.post('https://batbird.in/api/otp.php',this.state.mobileNo)
    console.log(resp.data)
    alert("OTP Send");
    this.setState({mobileNo : ''})
    this.setState({ isOTP : true })
}

confirmOTP()
{
     alert("OTP Submited");
//    this.setState({ isOTP : false })
}
componentDidMount = () =>  {
    // const Mydata =  firebase.database().ref("Person/")
    //  Mydata.on("value", DataSnap =>{
    //     console.log(DataSnap.val());
    // })
}
 render(){
   return(
     <View style = { styles.mainContainer }>
          <View style = { styles.inputContainer }>

              <View style = { styles.inputView3 }>
                <Input
                  placeholder = { this.state.isOTP == false? 'Mobile No' : 'Enter OTP'} 
                  value = { this.state.mobileNo }
                  onChangeText = { (mobileNo) => this.setState({ mobileNo })}
                  errorMessage = { this.state.errors.mobileNo }
                />
              </View>
              
          </View>
        <View style = {{ alignContent : 'center', marginBottom : 30,  width : '80%' }}>
            <Button  
                title = { this.state.isOTP == false? 'Send OTP' : 'Confirm'}
                onPress = { this.state.isOTP == false? this.registration : this.confirmOTP }
            />  
        </View>
        
     </View>
   )
 }
    
}
  export default HomePage