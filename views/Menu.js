import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import {Button} from 'react-native-elements'
import bgImage from '../assets/menu.png'

export default function Login(props){
    return(
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={styles.backgroundImage}>
            <Button
                buttonStyle={styles.button}
                title='Alerta'
                onPress={()=>props.navigation.navigate('Alerta')}>
            </Button>
            <Text style={styles.text}>Alerta</Text>
            <Button
                buttonStyle={styles.button}
                title='Mapa'
                onPress={()=>props.navigation.navigate('Mapa')}>
            </Button>
            <Text style={styles.text}>Mapa</Text>
            <Button
                buttonStyle={styles.button}
                title='Assistente'
                onPress={()=>props.navigation.navigate('Assistente')}>
            </Button>
            <Text style={styles.text}>Assistente</Text>
            <Button
                buttonStyle={styles.button}
                title='Policia'
                onPress={()=>props.navigation.navigate('Policia')}>
            </Button>
            <Text style={styles.text}>Policia</Text>
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
        borderRadius: 80,
        padding: 20,
    },
    text:{
        fontSize:18,
        // fontFamily:'Raleway-Thin',
        color:'black'
    }
  });