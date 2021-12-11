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
  
  const Stack = createStackNavigator();
  
  
    
  const Post = ({navigation}) => {
    
    const [quar, setQuar] = useState([])
    const [isLoading, setisLoading] = useState(true) 
   
    useEffect(() => {
      console.log("entrei no effect")
    
        const api = axios.create({baseURL: "http://192.168.43.192.192:8000/quarGet"});
        api.get("/quarGet") 
        .then((result) => {
          console.log("entrei no then", result)
          setQuar(result.data)
        })
        .catch((error) => {
          console.log("entrei no catch", error)
        }).finally(() => setisLoading(false))
    
    }, [])
    
    renderItem = ({item}) => {
      return ( 
        
        <View style={styles.item}>
          <View style={styles.View}>
          <Text style={styles.Text}  numberOfLines={1}>Email: <Text style={styles.TextItem}>{item.email}</Text></Text>
          </View>
          <View style={styles.View}>
          <Text style={styles.Text}  numberOfLines={1}>Nome: <Text style={styles.TextItem}>{item.nome}</Text></Text>
          </View>
          <View style={styles.View}>
          <Text style={styles.Text}  numberOfLines={1}>Numero de celular: <Text style={styles.TextItem}>{item.numero}</Text></Text>
          </View>
          <View style={styles.View}>
          <Text style={styles.Text}  numberOfLines={1}>Data diagnostico: <Text style={styles.TextItem}>{item.dtCovid}</Text></Text>
          </View>
          <View style={styles.View}>
          <Text style={styles.Text}  numberOfLines={1}>Data da quarentena: <Text style={styles.TextItem}>{item.dtQuarentena}</Text></Text>
          </View>
          <View style={styles.View}>
          <Text style={styles.Text}  numberOfLines={1}>Data da quarentena: <Text style={styles.TextItem}>{item.lugarCovid}</Text></Text>
          </View>
          <View style={styles.View}>
          <Text style={styles.Text}  numberOfLines={1}>Nome da sua vacina: <Text style={styles.TextItem}>{item.vacina}</Text></Text>
          </View>
          <View style={styles.View}>
          <Text style={styles.Text}  numberOfLines={1}>N° pessoas em contato: <Text style={styles.TextItem}>{item.numPessoas}</Text></Text>
          </View>
          <View style={styles.View}>
          <Text style={styles.Text}  numberOfLines={1}>Sintomas: <Text style={styles.TextItem}>{item.sintomas}</Text></Text>
          </View>
      </View>
      )
    }
    
    return (
     
    <View>
           <SafeAreaView style={styles.container}>
             <TouchableOpacity onPress={() => navigation.navigate("Create")} style={styles.button}><Text style={styles.TextButton}>Criar a sua ficha de diagnostico</Text></TouchableOpacity>
             <TouchableOpacity style={styles.button} onPress={() => {
          axios.delete("http://192.168.43.192.192:8000/quarDelete")
        }}><Text style={styles.TextButton}>Deletar a sua ficha</Text></TouchableOpacity>
     {isLoading ? <ActivityIndicator/> : (
     <FlatList
     data={quar}
     keyExtractor={item => `key-${item._id}`}
     renderItem={renderItem}
     contentContainerStyle={{ padding: 20}}
     numColumns={numColumns}/>)}
    </SafeAreaView>
       
      </View>
    );
  };

const numColumns = 1
const WIDTH = Dimensions.get("window").width
const styles = StyleSheet.create({

input: {
        fontSize: 18,
        flexDirection: "column-reverse",
        paddingBottom: 100,
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
 
  Text: {
    fontSize: 20,
    color: "black",
    flex: 1,
    justifyContent: 'center',
  },
  TextItem: {
    fontSize: 20,
    color: "grey",
    flex: 1,
    justifyContent: 'center',
  },
  TextButton: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
  },
  View: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 30,
    width: 350,
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
button: {
        textAlign: "center",
        margin:11,
        marginBottom: 5,
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
});

export default Post
  