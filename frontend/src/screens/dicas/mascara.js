import React,{Component, useState} from 'react';
import { Text, Button, View, TextInput, SafeAreaView, StyleSheet,TouchableOpacity } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

const mascara  = () => {

  return (
    <SafeAreaView style = {styles.area}>
    <ScrollView showsVerticalScrollIndicator={false}>
 <View style={styles.container}>
 <Text style={styles.textTitle}><Text style={styles.bold}>O uso da mascara{"\n"}</Text></Text>
 <View><Text style={styles.text}>O uso da mascara e recomendado em ambiente coletivo como em <Text style={styles.bold}>SALA DE AULA, TRANSPORTE PUBLICO, EVENTOS OU REUNIÃO{"\n"}</Text></Text></View>
 <View><Text style={styles.text}>A mascara e fortamente recomendado para reduzir a exposição e a contaminação de <Text style={styles.bold}>COVID-19{"\n"}</Text></Text></View>
 <View><Text style={styles.text}>E recomendado lavar as mãos antes de colocar a mascara, colocando-a sobre o <Text style={styles.bold}>NARIZ e a BOCA{"\n"}</Text></Text></View>
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
      borderRadius: 10,
      backgroundColor: "#fff",
      shadowColor: "#000",
      marginBottom: 50,
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
export default mascara