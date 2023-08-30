import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Videos from './videos';

export default function App() {
    console.disableYellowBox = true;
    return (
    <View style={{backgroundColor: 'black', width: '100%', height:'100%'}}>
        <Text style={{color:'white', padding: 30}}>olaaa</Text>
        <Videos text="Populares na Netflix"></Videos>
    </View>
    )
}

const style = StyleSheet.create({

})
