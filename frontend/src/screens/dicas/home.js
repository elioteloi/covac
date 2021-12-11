import React,{Component, useState} from 'react';
import { Text, Button, View, TextInput, SafeAreaView, StyleSheet,TouchableOpacity } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({navigation}) => {

  return (
    <SafeAreaView style = {styles.area}>
    <View style={styles.containerDicas}>
    <Text style={styles.textTitle}>Dicas contra a Covid-19</Text>
      <TouchableOpacity style={styles.button}>
       <Text style={styles.textButton}
       onPress={() => navigation.navigate("sintomas")}>Sintomas</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button}>
       <Text style={styles.textButton}
       onPress={() => navigation.navigate("transmite")}>Transmissão</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button}>
       <Text style={styles.textButton}
       onPress={() => navigation.navigate("prevenir")}>Prevenir</Text>
     </TouchableOpacity>
     
     <TouchableOpacity style={styles.button}>
       <Text style={styles.textButton}
       onPress={() => navigation.navigate("mascara")}>Mascara</Text>
     </TouchableOpacity>
     
    </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
    area: {
   flex: 1, 
    },
    containerDicas: {
      marginTop: 100,
    },
    textButton: {
      textAlign: "center",
      fontSize: 30,
      margin: 10,
      color: "black",
    },
    text: {
      textAlign: "center",
      fontSize: 30,
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
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10
        },
        shadowOpacity:  .3,
        shadowRadius: 20,
        padding: 5
    },
    
  })
  export default Home