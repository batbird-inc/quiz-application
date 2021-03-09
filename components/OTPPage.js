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
} from 'react-native';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
import viku from './../assets/mi.jpeg'
import firebase from '../FirebaseServices/Config';
import axios from 'axios';
 class OTPPage extends React.Component {
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
    console.log("Regular Expretion...");
    return regexp.test(this.state.mobileNo)
  }

  validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if(!this.state.mobileNo) {
        errors["mobileNo"] = "*Enter Mobile Number";
        formIsValid = false;
    }

    // if(!this.validateMobileNumber)
    // {
    //   console.log("Number False");
    //    formIsValid = false;
    //    errors["mobileNo"] = "*Enter Valid Mobile Number";
    // }

    this.setState({
        errors: errors
    })

    return formIsValid
}
registration = (event) =>{
    event.preventDefault();
    if(this.validateForm()){
        console.log("Success...");
        // this.getApiData()
      // await  firebase.auth().signInWithPhoneNumber(this.state.mobileNo)
      //   .on('state_changed', (phoneAuthSnapshot) => {
      //   console.log('Snapshot state: ', phoneAuthSnapshot);
      //   }, (phoneAuthError) => {
      //    console.error('Error: ', phoneAuthError);
      //   });
        firebase
        .database()
        .ref('Users/')
        .set({
         mobileNo : this.state.mobileNo
        });
        }
}

async getApiData()
{
    console.log(" Mobile No is : ",this.state.mobileNo);
    let resp = await axios.post('https://batbird.in/api/otp.php',this.state.mobileNo)
    console.log(resp.data)
    // alert("OTP Send");
    this.setState({mobileNo : ''})
    this.setState({ isOTP : true })
}

isOTP = () =>{
    let errors = {};
    let formIsValid = true;
    if(!this.state.mobileNo) {
      errors["mobileNo"] = "*Enter OTP";
      formIsValid = false;
    }
    this.setState({
    errors: errors
    })
    return formIsValid
}

confirmOTP = () =>
{
    if(this.isOTP()){
      alert("OTP Submited")
    //  this.props.navigation.navigate("Dashboard")
    }
}
componentDidMount = () =>  {
    const Mydata =  firebase.database().ref("Person/")
     Mydata.on("value", DataSnap =>{
        console.log(DataSnap.val());
    })
}
 render(){
   return(
     <View style = { styles.mainContainer }>
          <View style = { styles.inputContainer }>
              <View style = { styles.inputView3 }>
                <Input
                  // label = { this.state.isOTP == false? 'Enter Mobile No' : 'Enter OTP'}
                  placeholder = { this.state.isOTP == false? 'Enter Mobile No' : 'Enter OTP'} 
                  value = { this.state.mobileNo }
                  onChangeText = { (mobileNo) => this.setState({ mobileNo })}
                  errorMessage = { this.state.errors.mobileNo }
                  // style = {{ backgroundColor : '#e8e4e3'}}
                  keyboardType = 'number-pad'
                />
              </View>  
              <Button  
                mode="contained"
                style = {{  width : 200, borderRadius : 15, backgroundColor : '#517fa4', marginTop : 200}}
                onPress = { this.state.isOTP == false? this.registration : this.confirmOTP }>
                  { this.state.isOTP == false? 'Send OTP' : 'Confirm'}
              </Button>  
          </View>
     </View>
   )
 }   
}
  export default OTPPage
  
  
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor : '#1d1d1d'
},
inputContainer: {
  flex: 9,
  flexDirection: 'column',
  alignItems: 'center',
  top: 100,
  // backgroundColor : 'red'
},
inputView3: {
  flex: 0,
  width: 300,
  top: 200,
  // backgroundColor : 'white'
},
  })