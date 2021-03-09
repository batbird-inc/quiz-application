import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    ImageBackground, 
    ScrollView
} from 'react-native'
import { 
    Icon,
    // Button
} from 'react-native-elements';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
class GeneralKnowledgeQuizPage extends React.Component{
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
                        onPress = { ()=> { this.props.navigation.navigate("QuizStart")} }
                    />
                </View>
                <View style = { styles.title }>
                    <Text style = {{ fontSize : 20, color : '#517fa4'}}> 
                        All GeneralKnowledgeQuizPage Quiz  
                    </Text>
                </View>
                <View style = { styles.subtitle }>
                    <Text style = {{ fontSize : 20, color : '#517fa4', marginBottom : 10}}>
                        /Competations
                    </Text>
                </View>

                <ScrollView>

                <Card style = { styles.worldCricketCard } >
                    <Card.Content style = {{ marginLeft : -14, marginRight : -14, marginBottom : -14, marginTop : -14}}>
                        <ImageBackground 
                            style = {{ 
                                height : '100%', width : '100%', 
                                shadowColor : 'red', 
                                shadowOffset : { height : 2, width : 2 },
                                shadowRadius : 10
                            }} 
                            source = { require('../assets/gk.jpg')} >
                             
                            <View style = { styles.cricketTextView }>
                                <Text style = { styles.worldCricketText }> Gereral Knowledge</Text>
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
                                        onPress = { ()=> { this.props.navigation.navigate("GKRulesPage")} }>
                                        play 
                                    </Button>
                                </View>
                            </Card.Actions>

                        </ImageBackground> 
                    </Card.Content>
                </Card>

                <Card style = { styles.worldCricketCard } >
                    <Card.Content style = {{ marginLeft : -14, marginRight : -14, marginBottom : -14, marginTop : -14}}>
                        <ImageBackground 
                            style = {{ 
                                height : '100%', width : '100%', 
                                shadowColor : 'red', 
                                shadowOffset : { height : 2, width : 2 },
                                shadowRadius : 10
                            }} 
                            source = { require('../assets/literature.jpg')} >
                             
                            <View style = { styles.cricketTextView }>
                                <Text style = { styles.worldCricketText }> Literature</Text>
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

                <Card style = { styles.worldCricketCard } >
                    <Card.Content style = {{ marginLeft : -14, marginRight : -14, marginBottom : -14, marginTop : -14}}>
                        <ImageBackground 
                            style = {{ 
                                height : '100%', width : '100%', 
                                shadowColor : 'red', 
                                shadowOffset : { height : 2, width : 2 },
                                shadowRadius : 10
                            }} 
                            source = { require('../assets/entertainment.jpg')} >
                             
                            <View style = { styles.cricketTextView }>
                                <Text style = { styles.worldCricketText }> Entertainment</Text>
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

                <Card style = { styles.worldCricketCard } >
                    <Card.Content style = {{ marginLeft : -14, marginRight : -14, marginBottom : -14, marginTop : -14}}>
                        <ImageBackground 
                            style = {{ 
                                height : '100%', width : '100%', 
                                shadowColor : 'red', 
                                shadowOffset : { height : 2, width : 2 },
                                shadowRadius : 10
                            }} 
                            source = { require('../assets/technology.jpg')} >
                             
                            <View style = { styles.cricketTextView }>
                                <Text style = { styles.worldCricketText }> Technology</Text>
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
export default GeneralKnowledgeQuizPage;


const styles = StyleSheet.create({
    mainView : {    
        flex: 1,
        alignItems: 'center',
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
         shadowOpacity : 10,
         shadowRadius : 20,
         elevation : 5,
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