import React,{Component, useState} from 'react';
import { Text, Button, View, TextInput, SafeAreaView, StyleSheet,TouchableOpacity } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

const sintomas  = () => {

  return (
    <SafeAreaView style = {styles.area}>
    <ScrollView showsVerticalScrollIndicator={false}>
 <View style={styles.container}>
   <Text style={styles.textTitle}><Text style={styles.bold}>Os sintomas{"\n"}</Text></Text>
   <View><Text style={styles.text}>Os casos assintomaticos são caracterizados por teste de covid-19 <Text style={styles.bold}>POSITIVOS</Text> mas com ausencia de sintomas{"\n"}</Text></View>
   <View><Text style={styles.text}><Text style={styles.bold}>CASOS LEVES:</Text> São caracterizados por presencia de sintomas como <Text style={styles.bold}>TOSSE, DOR DE GARGANTA ou CORIZA,</Text> pode estar com perda de <Text style={styles.bold}>OLFATO e PALADAR, DIAREIA, FEBRE, CALAFRIOS, e FADIGA</Text>{"\n"}</Text></View>
   <View><Text style={styles.text}><Text style={styles.bold}>CASOS MODERADOS:</Text> São caracterizados por sinais leves da doenca como <Text style={styles.bold}>TOSSE e FEBRE</Text> diaria, falta de apetite, diarreia, presença de <Text style={styles.bold}>PNEUMONIA{"\n"}</Text></Text></View>
   <View><Text style={styles.text}><Text style={styles.bold}>CASOS GRAVES:</Text> São caracterizados por sindrome gripal que apresenta dificuldade de respirar, desconforto respiratorio ou pressão persistente no torax ou saturarcão de oxigenio{"\n"}</Text></View>
   <View><Text style={styles.text}><Text style={styles.bold}>CASOS CRITICOS:</Text> São caracterizados por sintomas de desconforto resoiratorio, insuficiencia respiratoria ou necessidade de suporte respiratorio e internaçoes em unidades de terapia intensiva{"\n"}</Text></View>
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
 
  text: {
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    color: "black",
  },
  textTitle: {
    textAlign: "center",
    fontSize: 30,
    color: "black",
  },
})
export default sintomas