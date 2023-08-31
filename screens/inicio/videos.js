import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts,Lato_100Thin_Italic } from '@expo-google-fonts/lato';
import { TouchableOpacity, FlatList, ImageBackground } from 'react-native';

const data = [
    { id: '1', picture: require('../../assets/images/IME.jpeg') },
    { id: '2', picture: require('../../assets/images/IME.jpeg') },
    { id: '3', picture: require('../../assets/images/IME.jpeg') },
    { id: '4', picture: require('../../assets/images/IME.jpeg') },
    { id: '5', picture: require('../../assets/images/IME.jpeg') },
  ];

const renderItem = ({ item }) => (
        <View style={{paddingRight:12}}>
            <ImageBackground source = {item.picture}>
                <TouchableOpacity style={style.botao}></TouchableOpacity>
            </ImageBackground>
        </View>
  );
  

export default function Videos(props) {
    return(
        <View style={style.videos}>
            <Text style={style.texto}>{props.text}</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
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
        //backgroundColor: 'rgba(255,255,255,0.3)',
    }
})

/*<View style={{flex:1, flexDirection: 'row', justifyContent: "space-between"}}>
                <TouchableOpacity style={style.botao}></TouchableOpacity>
                <TouchableOpacity style={style.botao}></TouchableOpacity>
                <TouchableOpacity style={style.botao}></TouchableOpacity>
            </View>*/