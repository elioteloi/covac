import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react'; 
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    useState,
    TouchableOpacity,
    SafeAreaView
  } from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from "./src/screens/HomeScreen"
import LoginScreen from './src/screens/LoginScreen';
const Stack = createStackNavigator()
import axios from 'axios';




const App = () => {
  const fetchApi = async () => {
    try {
  const res = await axios.get("http://192.168.0.117:8000")
  console.log(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    fetchApi()
  }, [])
  
  
   return (
     <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
         <Stack.Screen name="HomeScreen" component={HomeScreen}/>
         <Stack.Screen name="LoginScreen" component={LoginScreen}/>
       </Stack.Navigator>
     </NavigationContainer>
   )
  }
  
export default App