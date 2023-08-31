import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts,Lato_100Thin_Italic } from '@expo-google-fonts/lato';
import { TouchableOpacity } from 'react-native';

export default function Videos(props) {
    return(
        <View style={style.videos}>
            <Text style={style.texto}>{props.text}</Text>
            <View style={{flex:1, flexDirection: 'row', justifyContent: "space-between"}}>
                <TouchableOpacity style={style.botao}></TouchableOpacity>
                <TouchableOpacity style={style.botao}></TouchableOpacity>
                <TouchableOpacity style={style.botao}></TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    videos:{
        width:'100%',
        height:'29%',
    },
    texto:{
        color:'white',
        fontFamily: 'Lato_100Thin_Italic',
        fontSize: 18, 
        paddingTop: 30,
    },
    botao:{
        width: 120,
        height: '100%',
        backgroundColor: 'white',
    }
})
