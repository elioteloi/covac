import axios from 'axios';
import React, { Component } from 'react';
import { useState } from 'react';
import { Text, Button, View, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, KeyboardAvoidingView, ScrollView, Image } from "react-native"

// adb reverse tcp:porta tcp:porta
const SignUp = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [vacina, setVacina] = useState("")



  return (
    <KeyboardAvoidingView style={styles.area}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.textHeader}> Sign Up</Text>
          <Image source={require('./icons/covac.png')} style={{ width: 130, height: 130, tintColor: "black" }} />
        </View>


        <TextInput style={styles.input}
          value={name}
          placeholder="Nome"
          onChangeText={setName} />

        <TextInput style={styles.input}
          value={email}
          placeholder="Email"
          onChangeText={setEmail} />

        <TextInput style={styles.input}
          value={password}
          placeholder="Password"
          onChangeText={setPassword} />

        <TextInput style={styles.input}
          value={vacina}
          placeholder="tipo de vacina"
          onChangeText={setVacina} />

        <TouchableOpacity style={styles.button} onPress={() => {
          axios.post("http://192.168.43.192:8000/signup", {
            name: name,
            email: email,
            password: password
          }).then(response => {
            console.log(response.data);
            navigation.navigate("HomeScreen")
          }).catch(error => {
            console.log(error);
          })
        }} >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.text}>go to Login</Text>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  )

}
const { width, height } = Dimensions.get("window")
const styles = StyleSheet.create({
  area: {
    flex: 1,
    alignItems: "center",
    margin: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    margin: 10,
    color: "white",
  },
  input: {
    width: width - 40,
    backgroundColor: "#eae9e7",
    fontSize: 29,
    paddingHorizontal: 15,
    borderRadius: 8,
    color: "black",
    margin: 20,
  },
  button: {
    width: width - 40,
    height: 50,
    backgroundColor: "black",
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 29,
  },
  textHeader: {
    fontSize: 45,
    margin: 10,
    marginBottom: 20,
    color: "black",
    
  },
  header: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
export default SignUp