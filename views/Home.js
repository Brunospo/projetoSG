import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import {Button} from 'react-native-elements'
import bgImage from '../assets/home.png'

export default function Home(props){
    return(
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={styles.backgroundImage}>
            <Button
                buttonStyle={styles.button} 
                title='Play' 
                onPress={()=>props.navigation.navigate('Login')}>
            </Button>
            <Text style={styles.text}>Feito pra te manter segura.</Text>
            <Text style={styles.text}>Para onde quer que vá!</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        height: null,
        width:'100%',
    },
    button:{
        backgroundColor: 'rgb(198,48,41)',
        borderRadius: 40,
        padding: 15,
    },
    text:{
        fontSize:18,
        top:150,
        color:'white'
    }
  });