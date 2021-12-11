import React,{Component, useState} from 'react';
import { Text, Button, View, TextInput, SafeAreaView, StyleSheet,TouchableOpacity } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';


const prevenir  = () => {

  return (
    <SafeAreaView style = {styles.area}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
      <Text style={styles.textTitle}><Text style={styles.bold}>Prevenir a não contaminação de COVID-19{"\n"}</Text></Text>
      <View><Text style={styles.text}>As medidas indicadas pela <Text style={styles.bold}>OMS (Organização Mundial da Saude)</Text> estão indicadas as medidas de: <Text style={styles.bold}>DISTANCIAMENTO SOCIAL, HIGIENIZAÇÃO DAS MÃOS,</Text> uso de <Text style={styles.bold}>MASCARA,{"\n"}</Text> Em casos de suspeita de contaminação de <Text style={styles.bold}>COVID-19</Text> e recomendado o <Text style={styles.bold}>ISOLAMENTO SOCIAL</Text>{"\n"}</Text></View>
    </View>
    </ScrollView>
    </SafeAreaView>
   
  )
 }
 
const styles = StyleSheet.create({
  area: {
    backgroundColor: "black",
    fontSize: 20,
    margin: 120,
    borderRadius: 6,
      margin: 10,
      borderRadius: 10,
      backgroundColor: "#fff",
      shadowColor: "#000",
      marginBottom: 10,
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowOpacity:  .3,
      shadowRadius: 20,
      padding: 5
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
    marginBottom: 80,
    color: "black",
  },
  textTitle: {
    textAlign: "center",
    fontSize: 30,
    margin: 10,
    color: "black",
  },
})
export default prevenir