'use strict';
import React, { Component  } from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { RNCamera } from 'react-native-camera';


export default class BarCodePage extends Component{
  render() { 
    return (
      <View style={styles.container}>
      <SafeAreaView style={styles.container}>
          <RNCamera
              onCameraReady={() => {
                  console.log('ready')
              }}
          >
          </RNCamera>
      </SafeAreaView>
  </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});