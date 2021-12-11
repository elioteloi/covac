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


const doses = ({route}) => {
    
    const [isLoading, setisLoading] = useState(true) 
    const {doses} = route.params
    

    useEffect(() => {
      console.log("entrei no effect")
      setisLoading(false)
      
        // const api = axios.create({baseURL: "http://10.3.61.89:8000"});
        // api.get("/paises")
        // .then((result) => {
        //   console.log("entrei no then", result)
        //   console.log(result.data[0].pais)
        //   setPais(result.data)
          
        // })
        // .catch((error) => {
        //   console.log("entrei no catch", error)
        // }).finally(() => setisLoading(false))
    
    }, [])
    

  
    
    renderItem = ({item}) => {
      return (
        <View style={styles.item}>
          <View style={styles.View}>
            <Text style={styles.Text}>{item}</Text>
            
    
          </View>
      </View>
      )
    }
    
    return (
    <SafeAreaView style={styles.container}>
     
     {isLoading ? <ActivityIndicator/> : (
     <FlatList
     data={doses}
     keyExtractor={item => `key-${item}`}
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
      flex: 1
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
    
  })
export default doses