import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useCallback} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts,Lato_100Thin_Italic } from '@expo-google-fonts/lato';
import { TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const renderItem = ({ item }) => (
        <View style={{paddingRight:12}}>
            <ImageBackground source = {item.picture} style={style.imagensdefundo}>
                <TouchableOpacity style={style.botao}></TouchableOpacity>
            </ImageBackground>
        </View>
  );
  

export default function Videos(props) {
    const [fontsLoaded] = useFonts({
        'OpenSans-SemiBold': require('../../assets/fonts/OpenSans-SemiBold.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }

    return(
        <View style={style.videos}>
            <Text style={style.texto}>{props.text}</Text>
            <FlatList
                data={props.data}
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
        height:'27%',
    },
    texto:{
        color:'white',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 24, 
        paddingTop: 20,
    },
    botao:{
        width: 120,
        height: '100%',
        //backgroundColor: 'rgba(255,255,255,0.3)',
    },
    imagensdefundo:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

/*<View style={{flex:1, flexDirection: 'row', justifyContent: "space-between"}}>
                <TouchableOpacity style={style.botao}></TouchableOpacity>
                <TouchableOpacity style={style.botao}></TouchableOpacity>
                <TouchableOpacity style={style.botao}></TouchableOpacity>
            </View>*/