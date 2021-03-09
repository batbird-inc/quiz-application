import React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import { 
    Icon,
    Button
} from 'react-native-elements';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
class ReasoningQuizPage extends React.Component{
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
                        All ReasoningQuizPage Quiz  
                    </Text>
                </View>
                <View style = { styles.subtitle }>
                    <Text style = {{ fontSize : 20, color : '#517fa4', marginBottom : 10}}>
                        /Competations
                    </Text>
                </View>
                <Card style = {{ height : 140, width : 350}}>
                    <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>
                <Card style = {{ height : 140, width : 350, marginTop : 3}}>
                    <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>
                <Card style = {{ height : 140, width : 350, marginTop : 3}}>
                    <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>
                <Card style = {{ height : 140, width : 350, marginTop : 3,}}>
                    <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>
            </View>
        )
    }
}
export default ReasoningQuizPage;


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
    }
})