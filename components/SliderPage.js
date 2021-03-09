import axios from 'axios';
import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    ImageBackground
} from 'react-native'
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
import { log } from 'react-native-reanimated';
class SliderPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            slidlerImg : [],
        }
    }

    componentDidMount (){
       
    }
    render(){
        return(
            <View style = { styles.mainView }>
                <Card style = { styles.timerCard } >
                <ImageBackground 
                            style = {{ 
                                height : '100%', width : '100%', 
                                shadowColor : 'red', 
                                shadowOffset : { height : 2, width : 2 },
                                shadowRadius : 10,
                                borderRadius : 10
                            }} 
                            source = {{ uri : 'https://www.batbird.in/admin/' +  this.props.image }} > 
                    <Card.Content>

                            <View style = { styles.textView }>
                            {/* <Text style = {{ color : 'white'}}>{ this.props.image}</Text> */}
                            <Text style = {{ color : 'red'}}> Slider Page...</Text>
                                {/* <Text style = { styles.text }> Coin : 10</Text> */}
                            </View>
                            
                            <Card.Actions > 
                            </Card.Actions>

                    </Card.Content>
                    </ImageBackground>  
                </Card>
                <Text style = {{ color : 'white'}}>{ this.props.title}</Text>
                <Text style = {{ color : 'white'}}> Slider Page...</Text>
            </View>
        )
    }
}

export default SliderPage;

const styles = StyleSheet.create({
    mainView : { 
        flex : 1,
        height : 150, 
        width : '96%',
        alignItems : 'center',
        // justifyContent : 'center',
        // borderWidth : 1,
        borderRadius : 10,
        // backgroundColor : 'blue'
    },
    timerCard : {
        height : 150, 
        width : '103%',
        marginLeft : 3,
        // backgroundColor : 'rgba(47, 163, 218, .20)',
        shadowOpacity : 10,
        shadowRadius : 20,
        elevation : 5,
       //  opacity : 0.5,
       shadowColor : 'black',
       justifyContent : 'center',
    //    alignItems : 'center' ,
       backgroundColor: '#333333',
       borderRadius : 10
   },
})