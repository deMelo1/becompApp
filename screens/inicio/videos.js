import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/lato';

export default function Videos(props) {
    return(
        <View> 
            <Text style={style.texto}>{props.text}</Text>
            <View >

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    videos:{
        flexDirection: 'row',
        width:'100%',
        height:'33,33%',
    },
    texto:{
        color:'white',
        fontFamily: 'Lato_100Thin_Italic',
        fontSize: 23, 
        paddingTop: 30,
    }
})
