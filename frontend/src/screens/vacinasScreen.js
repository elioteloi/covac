import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    SafeAreaView,
    ActivityIndicator,
    FlatList
  } from 'react-native';
import vacina from "./vacina/vacina"
import paises  from "./vacina/paises"
const Stack = createStackNavigator()

const App = () => {
return(
    <Stack.Navigator initalRouteName="vacina"
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="vacina" component={vacina} screenOptions={{headerShown: false}}/>
      <Stack.Screen name="paises" component={paises}/>
    </Stack.Navigator>
)
}
 
    const styles = StyleSheet.create({
      container: {
        flex: 1
      },
      Text: {
        fontSize: 18,
        color: "black"
      },
      View: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
      },
      item: {
        flexDirection: "row",
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10
        },
        shadowOpacity:  .3,
        shadowRadius: 20,
        padding: 10
      },
      textInput: {
        fontSize: 18,
        flexDirection: "row",
        margin:11,
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
        padding: 10
      }
    })
export default App