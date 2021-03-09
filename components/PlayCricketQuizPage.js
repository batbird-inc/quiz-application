import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { 
    Icon,
} from 'react-native-elements';
// import { Avatar, Card, Title, Paragraph, Button, RadioButton} from 'react-native-paper';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import Slider from "react-native-slider";
import axios from 'axios';
class PlayCricketQuizPage extends React.Component{
    constructor(prop){
        super(prop)
        this.state = {
            Q1 : '',
            Q2 : '',
            Q3 : '',
            Q4 : '',
            Q5 : '',
            Q6 : '',
            Q7 : '',
            Q8 : '',
            Q9 : '',
            Q10 : '',
            data : [],
            value : 1,
        }
    }

    componentDidMount(){
        this.getQuestion();
    }

    async getQuestion() {
        let dataApi = await axios.get("https://www.batbird.in/api/subquestions.php?subcatid=6");
        this.setState({ data : dataApi.data.data });
        console.log(" Data Api---------> ",this.state.data);
    }

    handleFirstQuestion = () =>{
        this.setState({ Q1 : c })
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
                    
                    <View style = { styles.queView }>
                        {
                            this.state.data.length>0?
                            <CardStack
                                style = {styles.content}
                                renderNoMoreCards = {() => 
                                <Text style = {{ fontWeight: '700', fontSize: 18, color: 'gray' }}>
                                    No more Questions
                                </Text>}
                                ref = {swiper => {
                                    this.swiper = swiper
                                }}
                                onSwiped = {() => console.log('onSwiped')}
                                onSwipedLeft = {() => console.log('onSwipedLeft')}
                            >
                                {
                                    this.state.data.map((item, index)=>{
                                        var count = this.state.data.length;
                                        return( 
                                            <Card style = {[styles.card, styles.card1]} key = {index}>
                                                
                                                <View style = { styles.sliderView }>
                                                    <Slider
                                                        value = { this.state.value }
                                                        // onValueChange={value => this.setState({ value })} 
                                                    />
                                                </View>
                                                <View style = {{ paddingLeft : 10, paddingTop : 10, paddingRight : 1}}>
                                                    <Text style = { styles.text }>{item.questions}</Text>
                                                </View>

                                                <View style = {{ 
                                                    flex : 1, 
                                                    marginTop : 10, 
                                                    marginLeft : 10, 
                                                    // backgroundColor : 'red',
                                                    width : '93%',
                                                    height : 'auto',
                                                    flexDirection : 'row',
                                                    paddingBottom : 10
                                                }}>

                                                    <View style = {{ 
                                                        flexDirection : 'column',
                                                        // backgroundColor : 'red',
                                                        flex : 0,
                                                        width : '50%',
                                                        paddingRight : 3
                                                        // paddingLeft : 3
                                                    }}> 
                                                        <TouchableOpacity onPress={() => {
                                                            this.swiper.swipeLeft();
                                                        }}>
                                                            <Text style = { styles.text }>a) {item.option1}</Text>
                                                        </TouchableOpacity>

                                                        <TouchableOpacity onPress={() => {
                                                            this.swiper.swipeLeft();
                                                        }}>
                                                            <Text style = { styles.text }>b) {item.option2}</Text>
                                                        </TouchableOpacity>
                                                    </View> 

                                                    <View style = {{ 
                                                        flexDirection : 'column',
                                                        // backgroundColor : 'blue',
                                                        flex : 0,
                                                        width : '50%',
                                                        paddingLeft : 3
                                                    }}>
                                                        <TouchableOpacity onPress={() => {
                                                            this.swiper.swipeLeft();
                                                        }}>
                                                            <Text style = { styles.text }>c) {item.option3}</Text>
                                                        </TouchableOpacity>

                                                        <TouchableOpacity onPress={() => {
                                                            this.swiper.swipeLeft();
                                                        }}>
                                                            <Text style = { styles.text }>d) {item.option4}</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>

                                            </Card>
                                        )
                                    })
                                }
                                </CardStack>:
                            null
                        }
                   

                    {/* <View style={styles.footer}>
                        <View style={styles.buttonContainer}>

                            <TouchableOpacity style={[styles.button, styles.red]} onPress={() => {
                                this.swiper.swipeLeft();
                            }}>    
                                <Icon
                                name = 'navigate-before'
                                type = 'material'
                                color = 'black'/>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => {
                                    this.swiper.goBackFromLeft();
                            }}>
                                <Icon
                                name = 'history'
                                type = 'material'
                                color = 'black'/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                    this.swiper.swipeRight();
                            }}>
                            </TouchableOpacity>

                        </View>

                    </View> */}
                    </View> 
            </View>
        )
    }
}
export default PlayCricketQuizPage

const styles = StyleSheet.create({
    mainView : {    
        flex: 1,
        backgroundColor : '#1d1d1d'
    },
    arrowView : {
        flex : 0,
        marginTop : 40,
        marginRight : 300,
        height : 'auto',
        width : 'auto'
    },
    title : { 
        justifyContent: 'center', 
        alignItems : 'center',
    },
    subtitle : { 
        alignItems: 'center',
        justifyContent: 'center', 
    },
    queCard : {
        flex : 0,
        height : '50%',
        width : '95%',
        backgroundColor : 'white'
    },
    queView : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        // backgroundColor : 'red',
        marginTop : 20
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
        marginLeft : 30,
        marginRight : 20,
    },
    text : {
        fontSize : 15,
        // textShadowOffset : {
        //     height : 1,
        //     width : 1
        // },
        // textShadowColor : 'black',
        // textShadowRadius : 3,
        color : '#333333',
        // paddingBottom : 10
    },
    text1 : {
        fontSize : 25,
        textShadowOffset : {
            height : 1,
            width : 1
        },
        textShadowColor : 'white',
        textShadowRadius : 3,
        marginTop : 20,
        marginBottom : 20,
        color : 'white'
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
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
      },
      content:{
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      card:{
        width: 320,
        height: 'auto',
        // backgroundColor: '#FE474C',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity:0.5,
      },
      card1: {
        backgroundColor: 'white',
      },
      card2: {
        backgroundColor: '#FEB12C',
      },
      label: {
        lineHeight: 400,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
      footer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      buttonContainer:{
        width:220,
        flexDirection:'row',
        justifyContent: 'space-between',
      },
      button:{
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity:0.5,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        zIndex: 0,
      },
      orange:{
        width:55,
        height:55,
        borderWidth:6,
        borderColor:'rgb(246,190,66)',
        borderRadius:55,
        marginTop:-15
      },
      green:{
        width:75,
        height:75,
        backgroundColor:'#fff',
        borderRadius:75,
        borderWidth:6,
        borderColor:'#01df8a',
      },
      red:{
        width:75,
        height:75,
        backgroundColor:'#fff',
        borderRadius:75,
        borderWidth:6,
        borderColor:'#fd267d',
      },
      sliderView : {
        flex: 0,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center"
      },
})