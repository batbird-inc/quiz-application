import React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements';
class ContactUsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {

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
                        onPress = { ()=> { this.props.navigation.navigate("Dashboard")}}
                    />
                </View>
                <View style = { styles.title }>
                    <Text style = {{ fontSize : 20, color : '#517fa4'}}>Contact Us :- </Text>
                </View>
                    <View style = { styles.submainView }>
                        <View style = { styles.subtitle }>
                            <Text style = {{ fontSize : 20, color : '#517fa4' }}>
                            Address :- 
                            </Text>
                        </View>
                        <View style = { styles.subtitle }>
                            <Text style = {{ fontSize : 20, color : '#517fa4'}}>
                                Narayan appt.
                            </Text>
                        </View>
                        <View style = { styles.subtitle }>
                            <Text style = {{ fontSize : 20, color : '#517fa4'}}>
                            beside Sachin Medical,
                            </Text>
                        </View>
                        <View style = { styles.subtitle }>
                            <Text style = {{ fontSize : 20, color : '#517fa4'}}>
                            Pratapnagar Nagpur Pin code 440022
                            </Text>
                        </View>
                        <View style = { styles.subtitle }>
                            <Text style = {{ fontSize : 20, color : '#517fa4'}}>
                            Phone : +(91)9860306868
                            </Text>
                        </View>
                        <View style = { styles.subtitle }>
                            <Text style = {{ fontSize : 20, color : '#517fa4'}}>
                            Email : admin@batbird.in 
                            </Text>
                        </View>
                        </View>
            </View>
        )
    }
}
export default ContactUsPage;
const styles = StyleSheet.create({
    mainView : {    
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    submainView : {    
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    arrowView : {
        flex : 0,
        marginTop : 30,
        marginRight : 300,
    },
    title : { 
        justifyContent: 'center', 
    },
    subtitle : { 
        alignItems: 'center',
        justifyContent: 'center', 
    }
})