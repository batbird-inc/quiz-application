import React, { createRef }from 'react';
import { 
    // Button, 
    ThemeProvider,
    Input 
  } from 'react-native-elements';
import { 
  Text,
  View,
  // TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
import viku from './../assets/mi.jpeg'
import firebase from '../FirebaseServices/Config';
import axios from 'axios';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner} from 'expo-firebase-recaptcha';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;
const attemptInvisibleVerification = false;

 class MobileNoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        mobileNo : '',
        tempMobileNo : '',
        visibleIcon : false,
        isOTP : false,
        errors : {},
        data : [],
        timer : 60,
        verificationId : '',
        verificationCode : '',
        message : !firebaseConfig || Platform.OS === 'web'
        ? {
            text:
              'To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device.',
          }
        : undefined,
        otpData : ''
    };
    this.recaptchaVerifier = createRef();
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
registration  = async(event) => {
    event.preventDefault();
    if(this.validateForm()){
        console.log("Success...");
        this.getApiData()
        // try {
        //   let phoneProvider = new firebase.auth.PhoneAuthProvider();
        //   let verificationId = await phoneProvider.verifyPhoneNumber(
        //     '+91'+this.state.mobileNo,
        //     this.recaptchaVerifier.current
        //   );
        //   console.log(" Phone Auth..........");
        //   // setVerificationId(verificationId);
        //   this.setState({ verificationId : verificationId })
        //   this.setState({
        //     message : 'Verification code has been sent to your phone.',
        //   });

        // } catch (err) {
        //   // showMessage({ text: `Error: ${err.message}`, color: 'red' });
        //   this.setState({ message : err })
        //   console.log("Phone Auth Error.....",this.state.message );
        // }
        // firebase.auth().verifyPhoneNumber('+4423456789')
        // .on('state_changed', (phoneAuthSnapshot) => {
        // console.log('Snapshot state: ', phoneAuthSnapshot);
        // }, (phoneAuthError) => {
        //  console.error('Error: ', phoneAuthError);
        // });
        // firebase
        // .database()
        // .ref('Users/')
        // .set({
        //  mobileNo : this.state.mobileNo
        // });
        this.setState({ isOTP : true })
        this.setState({ tempMobileNo : this.state.mobileNo })
        this.setState({ mobileNo : '' })
        }
}

phoneAuthProvider = async() =>
{
      try {
        let credential = firebase.auth.PhoneAuthProvider.credential(
          this.state.verificationId,
          this.state.verificationCode
        );
        console.log("otp......");
        await firebase.auth().signInWithCredential(credential);
        this.setState({ message : 'Phone authentication successful' });
      } catch (err) {
        this.setState({ message : err });
      }
}
async getApiData()
{
    let tempNo = this.state.mobileNo
    console.log(" Mobile No is : ",this.state.mobileNo);
    // https://www.batbird.in/api/otp.php?usermobile=8788897048
    console.log('https://www.batbird.in/api/otp.php?usermobile='+tempNo);
    let resp = await axios.post('https://www.batbird.in/api/otp.php?usermobile='+this.state.mobileNo)
    console.log(resp.data)
    // alert("OTP Send");
    this.setState({ tempMobileNo : tempNo })
    this.setState({mobileNo : ''})
    this.setState({ isOTP : true })
    this.timeOut()
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

isHandleOTP = async() =>{
  let formIsValid = false;
  if(this.state.mobileNo == this.state.otpData){
    formIsValid = true;
    console.log( " OTP is Match :- ",formIsValid);
    return formIsValid
  }
  await AsyncStorage.removeItem('isLogin')
  return formIsValid;
}

confirmOTP = async() =>
{
    if(this.isOTP()){
      try
      {
        await  AsyncStorage.setItem('isLogin', this.state.tempMobileNo)
        console.log("From AsyncStorage...");
        let otpRespo = await axios.get('https://www.batbird.in/api/otp_v.php?mobile='+this.state.tempMobileNo)
        this.setState({ otpData : otpRespo.data })
        console.log(" OTP is :- ",this.state.otpData);
        if(this.isHandleOTP()){
          this.props.navigation.navigate("Dashboard")
        }
      } 
      catch(error)
      {
        console.log(" isLogin Error :- ",error);
      }
    }
}

resendOTP = () => {
    this.setState({ isOTP : false })
    this.setState({mobileNo : ''})
    // window.location.reload(true);
}

// componentDidMount = () =>  {
    // const Mydata =  firebase.database().ref("Person/")
    //  Mydata.on("value", DataSnap =>{
    //     console.log(DataSnap.val());
    // })
// }

timeOut = () => {
    if(this.state.isOTP == true ){
        this.interval = setInterval(
            () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
            1000
          );
        setTimeout(()=>{
            this.setState({ isOTP : false })
            this.setState({ timer : 60})
            // window.location.reload(true)
        },60000)
    }  
}
  
 render(){
   return(
     <View style = { styles.mainContainer }>
         {
             this.state.isOTP == false? <Image style = {{ height : '30%', width : '50%', marginBottom : 15}} source = { require('../assets/mobile.png')}/> :
             <Image style = {{ height : '30%', width : '50%', marginBottom : 15 }} source = { require('../assets/otp.png')}/>
             
         }
         {
            this.state.isOTP == true? <Text style = {{ fontSize : 15, color : 'white'}}>OTP send on { this.state.tempMobileNo }</Text> : null
         }
          {/* <FirebaseRecaptchaVerifierModal
            ref = { this.recaptchaVerifier }
            firebaseConfig = { firebaseConfig }
            attemptInvisibleVerification = { attemptInvisibleVerification }
          />  */}
          <View style = { styles.inputContainer }>
              <View style = { styles.inputView3 }>
                <Input
                  // label = { this.state.isOTP == false? 'Enter Mobile No' : 'Enter OTP'}
                  placeholder = { this.state.isOTP == false? 'Enter Mobile No' : 'Enter OTP'} 
                  value = { this.state.mobileNo }
                  onChangeText = { (mobileNo) => this.setState({ mobileNo })}
                  errorMessage = { this.state.errors.mobileNo }
                  style = {{ color : '#e8e4e3'}}
                  keyboardType = 'phone-pad'
                  autoCompleteType = 'off'
                />
                <Button  
                    mode = "contained"
                    style = {{  width : 200, borderRadius : 5, backgroundColor : '#49078f',}}
                    onPress = { this.state.isOTP == false? this.registration : this.confirmOTP }>
                    { this.state.isOTP == false? 'Send OTP' : 'Confirm'}
                </Button>
                {
                    this.state.isOTP == true? 
                    <Button 
                        mode = "text"
                        color =  'white' 
                        onPress = { this.resendOTP }
                        style = {{ fontSize : 20, color : 'white', marginTop : '5%'}}>
                            Resend  { this.state.timer }
                    </Button> : null
                }
              </View>  
                
          </View>
     </View>
   )
 }   
}
  export default MobileNoPage
  
  
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#1d1d1d'
},
inputContainer: {
  flex: 0,
  flexDirection: 'column',
  alignItems: 'center',
//   top: 100,
//   backgroundColor : 'red'
},
inputView3: {
  flex: 0,
  width: 250,
  alignItems : 'center'
 //   top: 200,
  // backgroundColor : 'white'
},
  })