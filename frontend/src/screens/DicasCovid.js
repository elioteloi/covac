import React,{Component, useState} from 'react';
import { Text, Button, View, TextInput, SafeAreaView, StyleSheet,TouchableOpacity } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import Home from './dicas/home';
import prevenir from "./dicas/prevenir"
import mascara from "./dicas/mascara"
import sintomas from "./dicas/sintomas"
import transmite from "./dicas/transmitir"
const Stack = createStackNavigator();

const App  = () => {

  return (
    <Stack.Navigator
    screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="prevenir" component={prevenir} />
    <Stack.Screen name="mascara" component={mascara} />
    <Stack.Screen name="sintomas" component={sintomas} />
    <Stack.Screen name="transmite" component={transmite} />
  </Stack.Navigator>
   
  )
 }
 
export default App