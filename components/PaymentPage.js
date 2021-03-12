import React from 'react';
import { 
    Input,
    Icon
  } from 'react-native-elements';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    TouchableOpacity, 
    TextInput,
} from 'react-native';
import { Button, Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
 class PaymentPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        rs : '',
        note : '',
        visible : false,
        errors : {},
        PaymentURL : ''
    };
  }

  validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!this.state.rs) {
        errors["rs"] = "*Enter amount";
        formIsValid = false;
    }
    
    this.setState({
        errors: errors
    })

    return formIsValid
}

handlePayment = () => {
  if(this.validateForm()){
    this.props.navigation.navigate("Dashboard")
  }
}

async componentDidMount(){
    this.setState({ PaymentURL : await AsyncStorage.getItem('url')})
    console.log(" Payment URL Is :- ",this.state.PaymentURL );
    // this.setState({ PaymentURL : await AsyncStorage.removeItem('url')})
    // console.log(" Payment URL Is :- ",this.state.PaymentURL );
}
 render(){
   return(
     <View style = { styles.mainContainer }>
         <Appbar style = { styles.navbar }>
             <View style = {{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
             <Text style = {{ fontSize : 20, color : 'white'}}> Dime Payment</Text>
             </View>
            </Appbar>
          <View style = { styles.inputContainer }>
            <View style = { styles.inputView }>
              <Input
                // style = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder = '  RS.'
                autoCapitalize = 'none'
                underlineColorAndroid = "transparent"
                value = { this.state.rs }
                onChangeText = { (rs) => this.setState({ rs })}
                errorMessage = { this.state.errors.rs }
                keyboardType = 'numeric'  
              /> 
            </View>
            <View style = { styles.inputView }>
              <Input
                // style = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder = '  Note.'
                autoCapitalize = 'none'
                underlineColorAndroid = "transparent"
                value = { this.state.note }
                onChangeText = { (note) => this.setState({ note })}
              /> 
            </View>

            <View style = {{ alignContent : 'center', marginTop : 10, width : '80%' }}>
                <Button 
                    onPress = { this.handlePayment }
                    mode = "contained"
                    style = {{  width : 200, borderRadius : 5, backgroundColor : '#49078f',}}
                    disabled = { false }>
                    Payment
                </Button>
            </View>
        </View>
     </View>
   )
 }
    
}
  export default PaymentPage

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor : '#403c3b'
},
inputContainer: {
    flex: 9,
    flexDirection: 'column',
    alignItems: 'center',
    top: 100,
    // backgroundColor : 'red'
},
inputView: {
    flex: 0,
    width: 300,
    borderRadius : 20
},
navbar : {
    // flex : 0,
    top : 30,  
    position : 'absolute',
    left : 0,
    right : 0,
  //   marginTop : 30,
    backgroundColor : '#49078f',
  },
})
