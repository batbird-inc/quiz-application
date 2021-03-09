import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import { 
    Icon,
} from 'react-native-elements';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
class BuyCoinsPage extends React.Component{
    constructor(prop){
        super(prop)
        this.state = {

        }
    }
    render(){
        return(
            <View style = { styles.mainView }>
    
                <ImageBackground 
                    style = {{ 
                        height : '100%', width : '100%' }} 
                    source = { require('../assets/3X6.jpeg')} >

                    <View style = { styles.arrowView }>
                        <Icon
                            name = 'arrow-back'
                            type = 'material'
                            color = 'black'
                            onPress = { ()=> { this.props.navigation.navigate("QuizRulesPage")} }
                        />
                    </View>

                    <View style = { styles.title} >
                        <Text style = { styles.text1 }>Buy Coins</Text>
                    </View>

                    <View style = { styles.textView }>
                        <Text style = { styles.text }>100 Coins</Text>
                        <Text style = { styles.text }>100 RS</Text>
                        <View style = { styles.coinButton }>
                            <Button mode="contained" style = {{  width : 150, borderRadius : 15}} >
                                Buy Coins
                            </Button>
                        </View>
                    </View> 

                    <View style = { styles.textView }>
                        <Text style = { styles.text }>500 Coins</Text>
                        <Text style = { styles.text }>400 RS</Text>
                        <View style = { styles.coinButton }>
                            <Button mode="contained" style = {{  width : 150, borderRadius : 15}} >
                                Buy Coins
                            </Button>
                        </View>
                    </View>
                    
                </ImageBackground>
            </View>
        )
    }
}
export default BuyCoinsPage

const styles = StyleSheet.create({
    mainView : {    
        flex: 1,
        alignItems: 'center',
    },
    arrowView : {
        flex : 0,
        marginTop : 40,
        marginRight : 300,
    },
    title : { 
        justifyContent: 'center', 
        alignItems : 'center',
    },
    subtitle : { 
        alignItems: 'center',
        justifyContent: 'center', 
    },
    worldCricketText : {
        fontSize : 30,
        textShadowOffset : {
            height : 2,
            width : 2
        },
        textShadowColor : 'black',
        textShadowRadius : 4,
    },
    textView : {
        marginLeft : 50
    },
    text : {
        fontSize : 20,
        textShadowOffset : {
            height : 1,
            width : 1
        },
        textShadowColor : 'black',
        textShadowRadius : 3,
    },
    text1 : {
        fontSize : 25,
        textShadowOffset : {
            height : 1,
            width : 1
        },
        textShadowColor : 'black',
        textShadowRadius : 3,
        marginTop : 20,
        marginBottom : 20
    },
    coinButton : {
        marginTop : 20,
        alignItems : 'center'
    },
    playButton : {
        marginTop : 20,  
        alignItems : 'center'
    },
    buttonView : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }
})