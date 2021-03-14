import { post } from './Demo'
import {
    View,
    Text,
    StyleSheet,
  } from 'react-native';
import React, { Component } from 'react';
 
    export default class MyComponent extends Component {

        constructor(){
            super()
            // this.obj = new Demo(); 
        }
     
       
      render() {
         
        return (
          <View style={styles.container}>
            <Text> {post()} Hiiiiii</Text>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container : {
        flex: 1,
        alignItems : 'center',
        justifyContent : 'center'
      },
    })