import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';


export default function App() {
  const [estado, setarEstado] = useState('leitura')
  const [anotacao, setarAnotacao] = useState('')

  return(
    <View style={{padding: 30}}>
      <StatusBar hidden />
      <TouchableOpacity>
        <View style={{width: 20,padding:20, backgroundColor:'blue'}}>
          <Text style={{color:'white'}}>Botão</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

<NavigationContainer>
  
</NavigationContainer>
const styles = StyleSheet.create({
  header: {
    width:'100%',
    padding: 20,
    backgroundColor:'#069'
  },
  anotacao:{
    fontSize:13
  },
  btnAnotacao:{
    position:'absolute',
    right:20,
    bottom:20,
    width:50,
    height:50,
    backgroundColor:'#069',
    borderRadius:25
  },
  btnAnotacaoTexto:{
    color:'white',
    position:'relative',
    textAlign:'center',
    top:3,
    fontSize:30
  },
  btnSalvar:{
    position:'absolute',
    right:20,
    bottom:20,
    width:100,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#069'
  }
});
