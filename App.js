import * as React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Title, Button, Paragraph, Caption } from 'react-native-paper';

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <ScrollView style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        usePoster={require('./assets/images/crimi.png')}
        source={require('./assets/videos/institucional-do-ime-2023.mp4')}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.containerPadding}>
                <Title style={{color:'white'}}>App Entregável</Title>
                <Button style={styles.buttonPlay} uppercase={false} icon="play" mode="contained" textColor='black' buttonColor='white'>
                    Assistir
                </Button>

                <Paragraph style={{color:'white'}}>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. 
                  It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.
                </Paragraph>

                <Caption style={styles.captionInfos}>
                  Elenco:{' '}
                  <Caption style={styles.captionWhite}>
                  De Melo, Henrique Holanda, João{' '}
                  </Caption>
                   Gêneros:{' '}
                  <Caption style={styles.captionWhite}>
                  React Native, JavaScript{' '} 
                  </Caption>
                   Cenas e momentos:{' '}
                  <Caption style={styles.captionWhite}>
                  App entregável player de vídeo{' '} 
                  </Caption>
                </Caption>
                </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  video:{
    flex: 1,
    width:'100%',
    height:230,
  },
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
  },
  buttonPlay:{
    marginVertical: 20,
  },
  captionInfos:{
    marginTop: 20,
    color:'gray',
  },
  captionWhite:{
    color:'white',
  },
  menu:{
    width: '100%',
    height: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
}); 
/*import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { Title, Button, Paragraph, Caption } from 'react-native-paper';


export default function App() {
    return(
        <ScrollView style={styles.container}>
            <ImageBackground source={{ uri: 'https://i.imgur.com/EJyDFeY.jpg'}} style={styles.hero}/>
            <View style={styles.containerPadding}>
                <Title style={{color:'white'}}>App Entregável</Title>
                <Button style={styles.buttonPlay} uppercase={false} icon="play" mode="contained" textColor='black' buttonColor='white'>
                    Assistir
                </Button>

                <Paragraph style={{color:'white'}}>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. 
                  It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.
                </Paragraph>

                <Caption style={styles.captionInfos}>
                  Elenco:{' '}
                  <Caption style={styles.captionWhite}>
                  De Melo, Henrique Holanda, João{' '}
                  </Caption>
                   Gêneros:{' '}
                  <Caption style={styles.captionWhite}>
                  React Native, JavaScript{' '} 
                  </Caption>
                   Cenas e momentos:{' '}
                  <Caption style={styles.captionWhite}>
                  App entregável player de vídeo{' '} 
                  </Caption>
                </Caption>
                  <View style={styles.menu}>
            
                  </View>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
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
    },
    buttonPlay:{
      marginVertical: 20,
    },
    captionInfos:{
      marginTop: 20,
      color:'gray',
    },
    captionWhite:{
      color:'white',
    },
    menu:{
      width: '100%',
      height: 38,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20,
    },
    video:{
      width:'100%',
    }
})


import 'react-native-gesture-handler';
import React from 'react';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Pesquisar from './screens/pesquisar/App';
import Favoritos from './screens/favoritos/App';
import Settings from './screens/settings/App';
import Inicio from './screens/inicio/App';
import { BlurView } from 'expo-blur';
import { ImageBackground, StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();

function InicioScreen(){
  return(
    <Inicio/>
  )
}

const PesquisarScreen = () => {
  return(
    <Pesquisar/>
  )
}

const FavoritosScreen = () => {
  return(
    <Favoritos/>
  )
}

const SettingsScreen = () => {
  return(
    <Settings/>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator vinitialRouteName="Player"
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { position: 'absolute' , backgroundColor:'black'},
    })}>
      <Tab.Screen name="Inicio" component={InicioScreen} options={{
          tabBarIcon:({ focused, color, size }) => (
          <Feather name={focused ? 'home':'home'} size={size} color={color} />
          )}} />
      <Tab.Screen name="Pesquisar" component={PesquisarScreen} options={{
          tabBarIcon:({ focused, color, size }) => (
          <Feather name={focused ? 'search':'search'} size={size} color={color} />
          )}}/>
      <Tab.Screen name="Favoritos" component={FavoritosScreen} options={{
          tabBarIcon:({ focused, color, size }) => (
          <AntDesign name={focused ? 'star':'staro'} size={size} color={color} />
          )}}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarIcon:({ focused, color, size }) => (
          <Feather name={focused ? 'settings':'settings'} size={size} color={color} />
          )}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
  <NavigationContainer>
      <MyTabs />
  </NavigationContainer>
  )
}*/