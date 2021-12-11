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

const vacina = ({navigation}) => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true) 
    const [originalVacina, setOriginalVacina] = useState([])
    const [searchWorld, setSearchWorld] = useState("")

    useEffect(() => {
      console.log("entrei no effect")
    
        const api = axios.create({baseURL: "http://192.168.43.192:8000"});
        api.get("/vacinas")
        .then((result) => {
          console.log("entrei no then", result) 
          console.log(result.data[1].paises)
          setOriginalVacina(result.data)
          setData(result.data)
          
        })
        .catch((error) => {
          console.log("entrei no catch", error)
        }).finally(() => setisLoading(false))
    
    }, [])

    useEffect(() => {
      console.log("UseEffect searchWorld", searchWorld)
      let filtred = originalVacina.filter((d) => {
        return d.vacina.includes(searchWorld)
      });
      setData(filtred)
    }, [searchWorld])
    
    
    renderItem = ({item}) => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("paises", {data: item.paises})}>
        <View style={styles.item}>
          <View style={styles.View}>
            <Text style={styles.Text}>{item.vacina}</Text>
    
          </View>
      </View>
      </TouchableOpacity>
      )
    }


    return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.textInput} 
      value={searchWorld}
      placeholder={"pequise a sua vacina..."}
      placeholderTextColor = "black"
      onChangeText={setSearchWorld}
      />

     {isLoading ? <ActivityIndicator/> : (
     <FlatList
     data={data}
     keyExtractor={item => `key-${item.vacina}`}
     renderItem={renderItem}
     contentContainerStyle={{
       padding: 20
     }}/>
    )}
    </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 90,
    },
    Text: {
      textAlign: "center",
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
export default vacina