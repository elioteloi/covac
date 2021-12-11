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
import Post from './lockdown/post';
import Create from './lockdown/create';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
  )
}

export default App;
