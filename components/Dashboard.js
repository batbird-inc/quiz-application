import React, { createRef } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    ImageBackground,
    // TouchableOpacity,
    Image,
    ScrollView,
    DrawerLayoutAndroid
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { Pages } from 'react-native-pages'
import { 
    Icon, 
    // Divider 
} from 'react-native-elements'
import SliderPage from './SliderPage';
import { Avatar, Card, Title, Paragraph, Button, Menu, Divider, Provider} from 'react-native-paper';
import CountDown from 'react-native-countdown-component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Dashboard extends React.Component
{
    constructor(props){ 
        super(props);
        this.state = {
            data : [ "First", "Second", "Third", "Fourth" ],
            name : "vikas",
            timer : '',
            counter : 0,
            apiData : [],
            visibleMenu : false,
            openMenu : false,
            closeMenu : false,
            isLogin : '',
            slidlerImg : [],
            firstComp : [],
            url : '',
            coins : [],
            
        }

        this.drawer = createRef();
    }

    async componentDidMount() {
        this.setState({ isLogin : await AsyncStorage.getItem('isLogin')})
        this.setState({ url : await AsyncStorage.getItem('url')})
        this.getSliderImage()
        this.getFirstCompetition()
        this.getCoins()
      }

    async getSliderImage() {
        let sdrImg = await axios.get('https://www.batbird.in/api/slideshow.php')
        this.setState({ slidlerImg : sdrImg.data.data})
        console.log(" Slider Image is : - ",this.state.slidlerImg);
    }

    async getFirstCompetition() {
        let fcomp = await axios.get('https://www.batbird.in/api/view_compition.php')
        this.setState({ firstComp : fcomp.data.data })
        console.log(" First Compatition data is :- ",this.state.firstComp);
    }

    async getCoins() {
        let gcoin = await axios.get('https://www.batbird.in/api/show_coin.php?mobile='+this.state.isLogin)
        this.setState({ coins : gcoin.data.data })
        console.log(" Coins is :- ",this.state.coins);
    }

    
//       <View>
//       {
//           this.state.slidlerImg.map((index)=>{
//               return(
//                   <Text>{index.image}</Text>
//               )
//           })
//       }
//   </View>
    //   componentWillUnmount() {
        //   this.componentDidMount{
             // let timer = setInterval(this.tick, 1000);
        // this.setState({timer});
        //   }
        // clearInterval(this.state.timer);
    //   }
    
    //   tick =() => {
    //     this.setState({
    //       counter: this.state.counter + 1
    //     });
    //   }

    profilePage = () => {
        this.props.navigation.navigate("ProfilePage")
    }

    quizStartPage = () => {
        this.props.navigation.navigate("QuizStart")
    }

    logout =  () => {
        AsyncStorage.removeItem('isLogin')
        this.props.navigation.navigate("MobileNoPage")
    }

navigationView = () => {
    return(  
        <View style={{ 
            flex: 1,
            backgroundColor : '#1d1d1d'
        }}
        >
        <View style = { styles.arrowView }>
            <Icon
                name = 'arrow-back'
                type = 'material'
                color = 'white'
                onPress = { ()=> { this.drawer.current.closeDrawer()} }
            />
        </View>
        <View style = {{ flex : 0, alignItems : 'center'}}>
            <Icon
                reverse
                name='account-circle'
                type='material'
            />
        </View>
        <View style = {{ flex : 0, alignItems : 'center'}}>
            <Text style = {{ fontSize : 15, color : 'white'}}> { this.state.isLogin }</Text>
        </View>
        
        <Text 
             onPress = { () => { this.props.navigation.navigate("ProfilePage") } }
            style = {{ fontSize : 18, marginLeft : 30, marginTop : 10, color : 'white', marginBottom : 10}}>
            Profile 
        </Text>
        {/* <Divider style = {{ backgroundColor : 'white', height : 2}}/> */}

        <Text 
            style = {{ fontSize : 18, marginLeft : 30, marginTop : 10, color : 'white', marginBottom : 10}}
            onPress = { () => { this.props.navigation.navigate("AboutUsPage") } }
            >
            About 
        </Text>
        {/* <Divider style = {{ backgroundColor : 'white', height : 2}}/> */}

        <Text 
            onPress = { () => { this.props.navigation.navigate("ContactUsPage") } }
            style = {{ fontSize : 18, marginLeft : 30, marginTop : 10, color : 'white', marginBottom : 10}}>
            ContactUs 
        </Text>
        {/* <Divider style = {{ backgroundColor : 'white', height : 2}}/> */}

        <Text 
           onPress = { ()=> { this.drawer.current.closeDrawer()} }
            style = {{ fontSize : 18, marginLeft : 30, marginTop : 10, color : 'white', marginBottom : 10}}>
            Help 
        </Text>
        {/* <Divider style = {{ backgroundColor : 'white', height : 2}}/> */}

        <Text 
            onPress = { this.logout }
            style = {{ fontSize : 18, marginLeft : 30, marginTop : 10, color : 'white', marginBottom : 10}}>
            Logout 
        </Text>
        {/* <Divider style = {{ backgroundColor : 'white', height : 2}}/> */}

        </View>
    )
  }

    render(){
        return(
            <View style = { styles.mainView }>
                 <DrawerLayoutAndroid
                        ref={ this.drawer }
                        drawerWidth={300}
                        drawerPosition={'left'}
                        renderNavigationView={this.navigationView}
                    >
                
                <Appbar style = { styles.navbar }>
                    <Appbar.Action
                        icon = "menu"
                        onPress={() => this.drawer.current.openDrawer()}
                    />
                    {/* <TouchableOpacity> */}
                    <Appbar.Action 
                        icon = "qrcode-scan"
                        style = {{ marginLeft : '75%'}}
                        onPress = { ()=>{ this.props.navigation.navigate("BarCodeScanPage")}}
                    />
                    {/* </TouchableOpacity> */}
                </Appbar>

               
               
                {/* <View style = { styles.timerCard }> */}
                <View style = { styles.pageView }>
                    <Pages indicatorColor = { '#1d1d1d'}>
                       {
                           this.state.slidlerImg.map((item, index)=>{
                               return(
                                   <SliderPage key = { index } image = { item.image }/> 
                               )
                           })
                       }
                    </Pages>
               </View>
               {/* </View> */}

               <ScrollView automaticallyAdjustContentInsets = { false }>
               <View style = { styles.cardView }>
                <View style = { styles.coinView } >
                    {/* <View style = {{ flex : 1, alignContent : 'center', flexDirection : 'row'}}> */}
                        <View style ={{ flex : 0 }}>
                                {/* {
                                    this.state.coins.map((item, index)=>{
                                        return(
                                            <View key = { index } style = {{ flex : 1, flexDirection : 'row'}}>
                                            <View style = {{ flex : 0}}>
                                                <Image
                                                    style = {{ height : '80%', width : '80%', marginRight : 40, borderRadius : 0, marginTop : 5}}
                                                    source = { require('../assets/coins.gif')}
                                                />
                                            </View> 
                                            <View style = {{ flex : 0}}>
                                                <Text style = {{ fontSize : 18, color : 'white', marginTop : 10}} >
                                                    {item.coin_gifted} Coins
                                                </Text>
                                            </View>
                                            </View>
                                        )
                                    })
                                }  */}
                        </View>
                        {/* <TouchableOpacity onPress = { ()=>{ this.props.navigation.navigate("BarCodeScanPage")} }> */}
                            {/* <View style = {{ flex :0, flexDirection : 'row', backgroundColor : 'red'}}> */}
                                {/* <View style = {{ flex : 0, backgroundColor : 'blue', marginRight : 10}}> */}
                                <TouchableOpacity onPress = { ()=>{ this.props.navigation.navigate("BarCodeScanPage")} }>
                                    <Text style = {{ fontSize : 18, color : 'white', marginTop : 10, marginLeft : 150}}>
                                         Pay
                                    </Text> 
                                </TouchableOpacity>
                                {/* </View> */}
                                {/* <View style = {{ flex : 0, backgroundColor : 'green'}}>  */}
                                <TouchableOpacity onPress = { ()=>{ this.props.navigation.navigate("BarCodeScanPage")} }>
                                    <Image
                                        style = {{ height : '100%', width : '70%', marginRight : 60, borderRadius : 0,}}
                                        source = { require('../assets/scanQR.gif')}
                                    /> 
                                {/* </View>  */}
                            {/* </View> */}
                        </TouchableOpacity>
                   
                    {/* </View>  */}
                </View>

               <Card style = { styles.timerCard } >
                    
                        {/* <ImageBackground 
                            style = {{ 
                                height : '100%', width : '100%', 
                                shadowColor : 'red', 
                                shadowOffset : { height : 2, width : 2 },
                                shadowRadius : 10
                            }} 
                            source = { require('../assets/politics.jpg')} > */}
                            <View style = { styles.textView }>
                                <Text style = {{ fontSize : 20, color : 'white'}}>Timer</Text>
                                <Text style = { styles.text }>  
                                {/* { this.state.timer }  */}
                               
                                <CountDown
                                    style = {{ marginBottom : 145, fontSize : 20,}}
                                    until={30}
                                    size={30}
                                    // onFinish={() => alert('Finished')}
                                    digitStyle={{backgroundColor: '#333333', fontSize : 10, height : 18, width : 50}}
                                    digitTxtStyle={{color: 'white', height : 40}}
                                    timeToShow={['M', 'S']}
                                    timeLabels={{m: ' ', s: ' '}}
                                /> 
                               
                               </Text>
                                {/* <Text style = { styles.text }> Coin : 10</Text> */}
                            </View>
                            
                            <Card.Actions >
                                <View style = { styles.playButton }>
                                    {/* <Button 
                                        mode="contained" 
                                        style = {{ borderRadius : 15, shadowRadius : 100, shadowColor : 'black'}}
                                        onPress = { ()=> { this.props.navigation.navigate("GKRulesPage")} }>
                                        play 
                                    </Button> */}
                                </View>
                            </Card.Actions>

                        {/* </ImageBackground>  */}
                   
                </Card>

                    <TouchableOpacity 
                        onPress = { this.quizStartPage }>
                        <Card style = { styles.quizCard } >
                            <ImageBackground 
                                style = {{ 
                                    height : '100%', width : '100%', 
                                    shadowColor : 'red', 
                                    shadowOffset : { height : 2, width : 2 },
                                    shadowRadius : 10
                                    }} 
                                imageStyle = {{ borderRadius : 10}}
                                source = { require('../assets/quizestartcard.jpeg')}
                                >    
                                </ImageBackground>
                        </Card>
                    </TouchableOpacity>
                
                </View>
                
                {/* <View style = {{ alignItems : 'center', marginTop : '2%'}}>
                    <Text style ={{ color : 'white', fontSize : 25}}>3 Letest Compitition</Text>
                </View> */}

                <View style = {styles.scrolcardView}>
                    {
                        this.state.firstComp.map((item, index)=>{
                            return(
                                <Card style = { styles.quiz3Card } key = {index}>
                                    <ImageBackground 
                                        style = {{ 
                                            height : '100%', width : '100%', 
                                            shadowColor : 'red', 
                                            shadowOffset : { height : 2, width : 2 },
                                            shadowRadius : 10
                                        }} 
                                        imageStyle = {{ borderRadius : 10}}
                                        source = {{ uri : 'https://www.batbird.in/admin/' +  item.image }} >
                                        
                                        <View style = { styles.cricketTextView }>
                                            <Text style = { styles.worldCricketText }>{item.cname} </Text>
                                            <Text style = { styles.worldCricketText }>{item.dumdate} </Text>
                                        </View>
                                        <Card.Actions >
                                        </Card.Actions>
                                    </ImageBackground> 
                                </Card>
                            )
                        })
                    }
                </View>
                </ScrollView>
                
                {/* <View style = { styles.buttonView }>
                    <Button 
                        mode="contained"
                        style = {{  width : 220, borderRadius : 15, backgroundColor : 'black', marginTop : 50}}
                        onPress = { this.quizStartPage }
                    >View Competitions</Button>
                    <Button 
                        mode="contained"
                        style = {{  width : 200, borderRadius : 15, backgroundColor : 'black', marginTop : 50}}
                        onPress = { this.quizStartPage }
                    >Start Quiz</Button>
                </View> */}
                </DrawerLayoutAndroid>
            </View>
        )
    }

}
export default Dashboard

const styles = StyleSheet.create({
    mainView : {
        flex : 1,
        backgroundColor : '#1d1d1d'
        // backgroundColor : '#12010f'
    },
    navbar : {
      flex : 0,  
      position : 'absolute',
      left : 0,
      right : 0,
    //   marginTop : 30,
      backgroundColor : 'black',
    },
    buttonView : {
        marginTop : 100,
        alignItems: 'center',
    },
    pageView : {
        flex : 0,
        height: 150, 
        backgroundColor: '#333333', 
        marginTop : 65, 
        width : '95%',
        marginLeft : 8,
        alignContent : 'center',
        justifyContent : 'center',
        borderRadius : 10
        // alignItems : 'center'
},
coinView : {
    flex : 1,
    flexDirection : 'row',
    height : 50, 
    width : '95%',
    shadowOpacity : 10,
    shadowRadius : 20,
    shadowOffset : {
        height : 10,
        width : 10,
    },
    // elevation : 5,
   //  opacity : 0.5,
   shadowColor : 'black',
//    justifyContent : 'space-between',
//    alignItems : 'center' ,
   backgroundColor: '#333333',
//    borderRadius : 30,
    marginBottom : 10,
    marginTop : 3,
    paddingRight : 10,
    paddingLeft : 10
},
timerCard : {
        height : 150, 
        width : '95%',
        // backgroundColor : 'rgba(47, 163, 218, .20)',
        shadowOpacity : 10,
        shadowRadius : 20,
        shadowOffset : {
            height : 10,
            width : 10,
        },
        // elevation : 5,
       //  opacity : 0.5,
       shadowColor : 'black',
       justifyContent : 'center',
       alignItems : 'center' ,
       backgroundColor: '#333333',
       borderRadius : 10,

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
    color : 'white',
    height : '100%',
    width : '100%',
    marginTop : 80,
    marginLeft : 200
},
cardView : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : '2%'
},
sportCard : {
    height : 150, 
    width : 164,
    // backgroundColor : 'rgba(47, 163, 218, .20)',
    shadowOpacity : 10,
    shadowRadius : 20,
    elevation : 5,
   //  opacity : 0.5,
   shadowColor : 'black',
   justifyContent : 'center',
   alignItems : 'center' ,
//    backgroundColor: '#333333',
   borderRadius : 10
},
radiusView : {
    height : 150, 
    width : 164,
    borderRadius : 10,
    backgroundColor : '#333333',
//    shadowColor : 'red',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
},
scrolcardView : {
    flex : 0,
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : '2%'
},
quizCard : {
    height : 200, 
    width : 340,
    // backgroundColor : 'rgba(47, 163, 218, .20)',
    shadowOpacity : 10,
    shadowRadius : 20,
    elevation : 5,
    backgroundColor: '#333333',
   //  opacity : 0.5,
   shadowColor : 'black',
   marginBottom : '2%',
   marginTop : '2%' 
},
quiz1Card : {
    height : 150, 
    width : 340,
    // backgroundColor : 'rgba(47, 163, 218, .20)',
    shadowOpacity : 10,
    shadowRadius : 20,
    elevation : 5,
    backgroundColor: '#333333',
   //  opacity : 0.5,
   shadowColor : 'black',
   marginBottom : '2%' 
},
quiz2Card : {
    height : 150, 
    width : 340,
    // backgroundColor : 'rgba(47, 163, 218, .20)',
    shadowOpacity : 10,
    shadowRadius : 20,
    elevation : 5,
    backgroundColor: '#333333',
   //  opacity : 0.5,
   shadowColor : 'black',
   marginBottom : '2%' 
},
quiz3Card : {
    height : 150, 
    width : 340,
    // backgroundColor : 'rgba(47, 163, 218, .20)',
    shadowOpacity : 10,
    shadowRadius : 20,
    elevation : 5,
    backgroundColor: '#333333',
   //  opacity : 0.5,
   shadowColor : 'black',
   marginBottom : '2%' 
},
startTimer : {
    fontSize : 20,
    textShadowOffset : {
        height : 1,
        width : 1
    },
    textShadowColor : 'black',
    textShadowRadius : 3,
    color : 'white',
    height : '100%',
    width : '100%'
},
arrowView : {
    flex : 0,
    marginTop : 40,
    marginRight : 230,
},
}); 