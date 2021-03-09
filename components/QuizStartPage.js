import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    ImageBackground,
    ScrollView,
    ActivityIndicator
} from 'react-native'
import { 
    Icon,
    // Button
} from 'react-native-elements';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
import axios from 'axios';

class QuizStart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            apiData : []
        }
    }

    componentDidMount(){
        this.getAPIData()
    }

    async getAPIData (){
        let getApi = await axios.get("https://batbird.in/api/maincat.php");
        console.log("----------------");
        this.setState({ apiData : getApi.data.data })
        console.log(" API ",this.state.apiData);
        // this.state.apiData.length>0 ?  
        //         <View>
        //             {
        //                 this.state.apiData.map((item)=>
        //                    console.log("-------->>>>>>>>>>>",item.data)
        //                 )
        //             }
        //         </View>
        //         :
        //         console.log("Loding...")
       
    }

    render(){
        return(
            <View style = { styles.mainView }>
                <View style = { styles.arrowView }>
                    <Icon
                        name = 'arrow-back'
                        type = 'material'
                        color = 'white'
                        onPress = { ()=> { this.props.navigation.navigate("Dashboard")}}
                    />
                </View>
                <View style = { styles.title }>
                    <Text style = {{ fontSize : 20, color : 'white'}}> 
                        All Quiz/Competations Categories 
                    </Text>
                </View>
                    {/* <View style = { styles.submainView }>
                        <View style = { styles.buttonView }>
                            <Button 
                                mode="contained"
                                style = {{  width : 200, borderRadius : 15, backgroundColor : '#333333'}}
                                onPress = { ()=> { this.props.navigation.navigate("SportQuizPage")} }
                            >Sport's</Button>
                            <Button 
                                mode="contained"
                                style = {{  width : 200, borderRadius : 15, backgroundColor : 'black', marginTop : 50}}
                                onPress = { ()=> { this.props.navigation.navigate("GeneralKnowledgeQuizPage")} }
                            >Gereral Knowledge</Button>
                            <Button 
                                mode="contained"
                                style = {{  width : 200, borderRadius : 15, backgroundColor : '#333333', marginTop : 50}}
                                onPress = { ()=> { this.props.navigation.navigate("PolityQuizPage")} }
                            >Polities</Button>
                            <Button 
                                mode="contained"
                                style = {{  width : 200, borderRadius : 15, backgroundColor : 'black', marginTop : 50}}
                                onPress = { ()=> { this.props.navigation.navigate("ReasoningQuizPage")} }
                            >Reasoning</Button>
                        </View>
                    </View> */}
<ScrollView>
{
    this.state.apiData.length>0?  
    <View>
        {
            this.state.apiData.map((item, index)=>{
               var img = item.img
                return(
                    <Card style = { styles.worldCricketCard } key = { index } >
                            <ImageBackground 
                                style = {{ 
                                    height : '100%', width : '100%', 
                                    shadowColor : 'red', 
                                    shadowOffset : { height : 2, width : 2 },
                                    shadowRadius : 10
                                }} 
                                source = {{ uri : 'https://www.batbird.in/admin/' + img }} 
                                imageStyle = {{ borderRadius : 10}}>
                                
                                <View style = { styles.cricketTextView }>
                                    <Text style = { styles.worldCricketText }>{ item.name }</Text>
                                </View>

                                <View style = { styles.textView }>
                                    <Text style = { styles.text }>No. Of Questions : { item.qst_count }</Text>
                                    <Text style = { styles.text }> Coins : { item.coins }</Text>
                                </View>
                                
                                <Card.Actions >
                                    <View style = { styles.playButton }>
                                        <Button 
                                            mode="contained" 
                                            style = {{ borderRadius : 15, shadowRadius : 100, shadowColor : 'black'}}
                                            onPress = { ()=> { this.props.navigation.navigate("PlayCricketQuizPage")} }>
                                            play 
                                        </Button>
                                    </View>
                                </Card.Actions>
                            </ImageBackground> 
                    </Card>
                )
            })
        }
    </View>
    :
    <View style = {{ flex : 1, alignItems : 'center', justifyContent : 'center', marginTop : '150%'}}>
        <ActivityIndicator size = "large" color = "#49078f" />
    </View>
    
                
}
</ScrollView>
            </View>
        )
    }
}
export default QuizStart;


const styles = StyleSheet.create({
    mainView : {    
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor : '#1d1d1d'
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
        marginTop : 20,
        justifyContent: 'center', 
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
        //  backgroundColor : 'rgba(47, 163, 218, .20)',
         shadowOpacity : 10,
         shadowRadius : 20,
         elevation : 5,
        //  opacity : 0.5,
        shadowColor : 'black',
        marginTop : 5,
        borderRadius : 10

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