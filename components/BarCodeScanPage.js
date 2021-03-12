import React, {useEffect, useState} from 'react';
import {Button, Dimensions, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {BarCodeScanner, BarCodeScannerResult} from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const finderWidth = 280;
const finderHeight = 230;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const viewMinX = (width - finderWidth) / 2;
const viewMinY = (height - finderHeight) / 2;

class BarCodeScanPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hasPermission : null,
            type : BarCodeScanner.Constants.Type.back,
            scanned : false,
            URLdata : '',
        }
    }

    async componentDidMount() {
        let status = await BarCodeScanner.requestPermissionsAsync();
        this.setState({ hasPermission : status })
    }


    handleBarCodeScanned = async (scanningResult) => {
        if (!this.state.scanned) {
            let {type, data, bounds: {origin} = {}} = scanningResult;
            const {x, y} = origin;
            if (x >= viewMinX && y >= viewMinY && x <= (viewMinX + finderWidth / 2) && y <= (viewMinY + finderHeight / 2)) 
            {
                this.setState({ scanned : true })
                await AsyncStorage.setItem('url',data)
                // this.setState({ URLdata : await AsyncStorage.setItem('url') })
                console.log(" Payment URL :- ",data);
                alert(`Bar code with type ${type} and data ${data} has been scanned!`);
                this.props.navigation.navigate("PaymentPage")
            }
        }
    }

    render(){ 
    return (
        <View style = {{ flex: 1 }}>
           
            <BarCodeScanner 
                onBarCodeScanned = { this.handleBarCodeScanned }
                type = { this.state.type }
                barCodeTypes = { [BarCodeScanner.Constants.BarCodeType.qr] }
                style = { [StyleSheet.absoluteFillObject, styles.container] }>
                <View style = {{  alignItems : 'flex-start', marginTop : 30, marginRight : 300}}>
                    <Icon
                        name = 'arrow-back'
                        type = 'material'
                        color = 'white'
                        onPress = { ()=> { this.props.navigation.navigate("Dashboard")} }
                        style = {{ marginRight : 70}}
                    />
                </View>
                <View
                    style = {{
                        flex : 1,
                        backgroundColor : 'transparent',
                        flexDirection : 'row',
                    }}>

                    <TouchableOpacity
                        style = {{
                            flex: 1,
                            alignItems: 'flex-end',
                        }}

                        onPress={() => {
                            this.setState({ type : BarCodeScanner.Constants.Type.back })
                        }}>
                         
                    </TouchableOpacity>

                </View>

                <BarcodeMask edgeColor = "#62B1F6" showAnimatedLine/>
                    { 
                        this.state.scanned && 
                        <Button title = "Scan Again" onPress = {() => this.setState({ scanned : false })}/>
                    }
            </BarCodeScanner>
        </View>
    )
}
}

export default BarCodeScanPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    }
});