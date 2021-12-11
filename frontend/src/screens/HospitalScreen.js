import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    SafeAreaView,
    ActivityIndicator,
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    Dimensions
  } from 'react-native'
  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import { createStackNavigator } from '@react-navigation/stack';
  import Estado from "./doses/estado"
  import Doses from "./doses/doses"
  const Stack = createStackNavigator();
  
  const App = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        
        
        <Stack.Screen name="Estado" component={Estado} />
        <Stack.Screen name="Doses" component={Doses} />
      </Stack.Navigator>
    )
  }
  
  export default App;
  