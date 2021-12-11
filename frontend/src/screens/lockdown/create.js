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


const Create = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [numero, setNumero] = useState("")
    const [dtCovid, setDtCovid] = useState("")
    const [dtQuarentena, seDtQuarentena] = useState("")
    const [lugarCovid, setLugarCovid] = useState("")
    const [vacina, setVacina] = useState("")
    const [numPessoas, setNumPessoas] = useState("")
    const [sintomas, setSintomas] = useState("")
    return (
      <KeyboardAvoidingView style = {styles.area}>
      <ScrollView style={styles.container}>
  
      <TextInput style={styles.input}
        value={email}
        placeholder="email"
        placeholderTextColor="black" 
        onChangeText={setEmail}
        />

        <TextInput style={styles.input}
        value={nome}
        placeholder="nome"
        placeholderTextColor="black" 
        onChangeText={setNome}
        />

        <TextInput style={styles.input}
        value={numero}
        placeholder="numero de celular"
        placeholderTextColor="black" 
        onChangeText={setNumero}
        />

        <TextInput style={styles.input}
         value={dtCovid}
         placeholder="data de diagnostico"
         placeholderTextColor="black" 
         onChangeText={setDtCovid}
         />
  
        <TextInput style={styles.input}
        value={dtQuarentena}
        placeholder="data da sua quarentena"
        placeholderTextColor="black" 
        onChangeText={seDtQuarentena}
        />
        
        <TextInput style={styles.input}
        value={lugarCovid}
        placeholder="lugar que teve covid"
        placeholderTextColor="black" 
        onChangeText={setLugarCovid}
        />

        <TextInput style={styles.input}
        value={vacina}
        placeholder="Nome da sua vacina"
        placeholderTextColor="black" 
        onChangeText={setVacina}
        />

        <TextInput style={styles.input}
        value={numPessoas}
        placeholder="N° pessoas em contato"
        placeholderTextColor="black" 
        onChangeText={setNumPessoas}
        />

        <TextInput style={styles.input}
        value={sintomas}
        placeholder="Sintomas"
        placeholderTextColor="black" 
        onChangeText={setSintomas}
        />
        
        
        <TouchableOpacity style={styles.button} onPress={() => {
          axios.post("http://192.168.43.192:8000/quarPost",{ 
            dtCovid: dtCovid,
            dtQuarentena: dtQuarentena,
            lugarCovid: lugarCovid
            }).then(response => {
              console.log(response.data);
                navigation.navigate("Post")
            }).catch(error => {
              console.log(error);
            })
        }} >
         <Text style={styles.Text}>Submit</Text>
       </TouchableOpacity>
       </ScrollView>
      </KeyboardAvoidingView>
    )
  }

  const numColumns = 2
const WIDTH = Dimensions.get("window").width
const styles = StyleSheet.create({

input: {
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
  },
 
  Text: {
    textAlign: "center",
    fontSize: 18,
    color: "black",    
  },
 View: {
   backgroundColor: "#3232ff",
       alignItems: "center",
       justifyContent: "center",
       height: WIDTH / numColumns,
       
      },
button: {
        textAlign: "center",
        margin:11,
        marginBottom: 5,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        marginBottom: 130,
        shadowOffset: {
          width: 0,
          height: 10
        },
        shadowOpacity:  .3,
        shadowRadius: 20,
        padding: 10
}
});
  export default Create 