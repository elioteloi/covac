import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  useState,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

// https://imunizacao-es.saude.gov.br/_search
// https://opendatasus.saude.gov.br/dataset/b772ee55-07cd-44d8-958f-b12edd004e0b/resource/5916b3a4-81e7-4ad5-adb6-b884ff198dc1/download/manual_api_vacina_covid-19.pdf

import Tabs from './navigation/tabs';
import paisesScreen from '../screens/paisesScreen';
import vacinasScreen from '../screens/vacinasScreen';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <NavigationContainer  independent={true}>
        <Tabs/>
    </NavigationContainer>
    //  <View><Text>hello</Text></View>
  );
};

const styles = StyleSheet.create({
  area: {
    backgroundColor: '#00bfff',
    flex: 1,
  },
  container: {
    marginTop: 150,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    margin: 10,
    color: 'white',
  },
  input: {
    fontSize: 20,
    margin: 12,
    borderWidth: 2,
    borderRadius: 6,
    backgroundColor: '#1e90ff',
  },
  button: {
    backgroundColor: '#1e90ff',
    fontSize: 20,
    margin: 12,
    borderWidth: 2,
    borderRadius: 6,
  },
  background: {
    backgroundColor: 'white',
  },
});

export default Home;
