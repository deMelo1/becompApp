import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Videos from './videos';

const data = [
    { id: '1', picture: '../../assets/images/IME' },
    { id: '2', picture: '../../assets/images/IME' },
    { id: '3', picture: '../../assets/images/IME' },
    { id: '4', picture: '../../assets/images/IME' },
    { id: '5', picture: '../../assets/images/IME' },
  ];

export default function App() {
    console.disableYellowBox = true;
    return (
    <View style={{backgroundColor: 'black', width: '100%', height:'100%'}}>
        <Text style={{color:'white', padding: 30}}>olaaaaaaaaaaa</Text>
        <Videos data= {data} text="Populares na Netflix"></Videos>
    </View>
    )
}

const style = StyleSheet.create({

})
