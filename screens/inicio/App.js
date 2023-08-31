import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Videos from './videos';
//import * as SplashScreen from 'expo-splash-screen';
//import { useFonts,Lato_100Thin_Italic } from '@expo-google-fonts/lato';

//SplashScreen.preventAutoHideAsync();

const data = [
    { id: '1', picture: require('../../assets/images/boasvindasgrifo.png') },
    { id: '2', picture: require('../../assets/images/luau.png') },
    { id: '3', picture: require('../../assets/images/trf.png') },
    { id: '4', picture: require('../../assets/images/crimi.png') },
    { id: '5', picture: require('../../assets/images/pzteam.png') },
  ];

export default function App() {
    /*console.disableYellowBox = true;

    const [fontsLoaded] = useFonts({
        'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }*/

    return (
    <View style={{backgroundColor: 'rgb(25,25,25)', width: '100%', height:'100%'}}>
        <StatusBar hidden />
        <View style={style.header}>
            <Text style={style.imeflix1}>IME</Text>
            <Text style={style.imeflix2}>FLIX</Text>
        </View>
        <Videos data= {data} text="GRIFO"></Videos>
    </View>
    )
}

const style = StyleSheet.create({
    header:{
        width:'100%',
        height: 80,
        backgroundColor:'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        paddingTop: 24,
    },
    imeflix1:{
        color: 'rgb(192,42,41)',
        fontSize: 30,
        fontFamily: 'Montserrat-Medium',
    },
    imeflix2:{
        color: 'rgb(33,85,143)',
        fontSize: 30,
        fontFamily: 'Montserrat-Medium',
    }
})
