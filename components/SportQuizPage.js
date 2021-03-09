import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView} from 'react-native'
import { 
    Icon,
    // Button
} from 'react-native-elements';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
class SportQuizPage extends React.Component{
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
                        color = 'white'
                        onPress = { ()=> { this.props.navigation.navigate("QuizStart")} }
                    />
                </View>

                <View style = { styles.title }>
                    <Text style = {{ fontSize : 20, color : 'white', textShadowOffset : { height : 1, width : 1}, textShadowColor : '#000', textShadowRadius : 3}}> 
                        All Sport's Quiz  
                    </Text>
                </View>
                <View style = { styles.subtitle }>
                    <Text style = {{ fontSize : 20, color : 'white', marginBottom : 10, textShadowOffset : { height : 1, width : 1}, textShadowColor : '#000', textShadowRadius : 3}}>
                        /Competations
                    </Text>
                </View>

                <ScrollView>

                <Card style = { styles.worldCricketCard } >
                    <Card.Content style = {{ marginLeft : -14, marginRight : -14, marginBottom : -14, marginTop : -14}}>
                        <ImageBackground 
                            style = {{ 
                                height : '100%', width : '100%', 
                                shadowOffset : { height : 20, width : 20 },
                                shadowOpacity : 10,
                                shadowRadius : 10,
                                shadowColor : 'green', 

                            }} 
                            source = { require('../assets/3X2.jpeg')} >
                             
                            <View style = { styles.cricketTextView }>
                                <Text style = { styles.worldCricketText }> World Cricket</Text>
                            </View>

                            <View style = { styles.textView }>
                                <Text style = { styles.text }>No. Of Question : 20</Text>
                                <Text style = { styles.text }> Coin : 10</Text>
                            </View>
                            
                            <Card.Actions >
                                <View style = { styles.playButton }>
                                    <Button 
                                        mode="contained" 
                                        style = {{ borderRadius : 15, shadowRadius : 100, shadowColor : 'black'}}
                                        onPress = { ()=> { this.props.navigation.navigate("QuizRulesPage")} }>
                                        play 
                                    </Button>
                                </View>
                            </Card.Actions>

                        </ImageBackground> 
                    </Card.Content>
                </Card>

                

                </ScrollView>
            </View>
        )
    }
}
export default SportQuizPage;


const styles = StyleSheet.create({
    mainView : {    
        flex: 1,
        alignItems: 'center',
        backgroundColor : '#1d1d1d'
        // justifyContent: 'center', 
    },
    submainView : {    
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    arrowView : {
        flex : 0,
        marginTop : 40,
        marginRight : 300,
    },
    title : { 
        // marginTop : 20,
        justifyContent: 'center', 
        alignItems : 'center',
    },
    subtitle : { 
        alignItems: 'center',
        justifyContent: 'center', 
    },
    cricketBackgroundColor : {
        flex : 1,
        backgroundColor : 'rgba(47, 163, 217, .4)',
        height : 200,
        width : 350,
    },
    worldCricketCard : {
         height : 200, 
         width : 350,
         backgroundColor : 'rgba(47, 163, 218, .20)',
         shadowOffset : { height : 20, width : 20 },
         shadowOpacity : 10,
         shadowRadius : 20,
        //  elevation : 5,
        //  opacity : 0.5,
        shadowColor : 'black'   
    },
    cricketTextView : {
        alignItems : 'flex-end',
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
        marginLeft : 10,
        marginTop : 20
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
    playButton : {
        marginLeft : 50,
        marginTop : 20
    }
})