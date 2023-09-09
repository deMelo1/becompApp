import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { Title, Button } from 'react-native-paper';
export default function App() {
    return(
        <ScrollView style={style.container}>
            <ImageBackground source={{ uri: 'https://i.imgur.com/EJyDFeY.jpg'}} style={style.hero}/>
            <View style={style.containerPadding}>
                <Title>Nome do Filme</Title>
                <Button icon="play" uppercase={false} mode="contained" color="#fff">
                    Assistir
                </Button>
            </View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
    },
    hero:{
        height:200,
        width:'100%',
    },
    containerPadding:{
        padding: 20,
    }
})
