import React,{Component, useState} from 'react';
import { Text, Button, View, TextInput, SafeAreaView, StyleSheet,TouchableOpacity } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

const transmitir  = () => {

  return (
    <SafeAreaView style = {styles.area}>
    <ScrollView showsVerticalScrollIndicator={false}>
   <View style={styles.container}>
    <Text style={styles.textTitle}><Text style={styles.bold}>A transmissão{"\n"}</Text></Text>
    <View><Text style={styles.text}><Text style={styles.bold}>A transmissão por CONTATO:</Text> ela e feita direitament com superfice contaminada, ou com uma pessoa infectada por <Text style={styles.bold}>COVID-19</Text> durante um <Text style={styles.bold}>aperto de mãos</Text> seguindo de <Text style={styles.bold}>toque nos olhos</Text>, <Text style={styles.bold}>nariz ou boca</Text>{"\n"}</Text></View>
    <View><Text style={styles.text}><Text style={styles.bold}>A transmissão por GOTICULAS:</Text> e feita diretamente por meio de exposição a goticulas resiratorias contendo virus por um pessoa comtaminada quando ele se encontra e menos de <Text style={styles.bold}>1 metro de distancia{"\n"}</Text></Text></View>
    <View><Text style={styles.text}><Text style={styles.bold}>A transmissão por AEROSSOL:</Text> ela e procedida por goticulas respiratorias contendo o virus que podem permanecer suspensas no ar, podem ser levadas pelo ar em distencias de ate 1 metro{"\n"}</Text></View>
  </View>
  </ScrollView>
  </SafeAreaView>
   
  )
 }
 
const styles = StyleSheet.create({
  area: {
    backgroundColor: "black",
    fontSize: 20,
    margin: 12,
    borderRadius: 6,
      margin: 10,
      borderRadius: 10,
      backgroundColor: "#fff",
      shadowColor: "#000",
      marginBottom: 140,
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowOpacity:  .3,
      shadowRadius: 20,
      padding: 5
  },
  containerDicas: {
    marginTop: 100,
    
  },
  textButton: {
    textAlign: "center",
    fontSize: 30,
    margin: 10,
    color: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    color: "black",
  },
  textTitle: {
    textAlign: "center",
    fontSize: 30,
    margin: 10,
    color: "black",
  },
  button: {
    backgroundColor: "black",
    fontSize: 20,
    margin: 12,
    borderRadius: 6,
  },
  background: {
  backgroundColor: "white",
  }
})
export default transmitir