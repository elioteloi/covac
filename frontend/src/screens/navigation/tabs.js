import React from "react"
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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
import paisesScreen from "../paisesScreen"
import vacinasScreen from "../vacinasScreen"
import DicasCovid from "../DicasCovid"
import Lockdown from "../LockdownScreen"
import Hospital from "../HospitalScreen"



const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: "#ffffff",
                    borderRadius: 15,

                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen
                name="Vacinas"
                component={vacinasScreen}
                options={{
                    tabBarOptions: { showIcon: true, },
                    tabBarIcon: () => (
                        <View>
                        <Image source={require('../icons/vacina.png')} style={{width:40, height:40, tintColor: "black"}} />
                        <Text style={{color: 'black', fontSize: 12}}>
                    Vacinas
                </Text>
                </View>
                    )
                }} />

            <Tab.Screen
                name="Paises"
                component={paisesScreen}
                options={{
                    tabBarOptions: { showIcon: true, },
                    tabBarIcon: () => (
                        <View>
                        <Image source={require('../icons/world.png')} style={{width:40, height:40, tintColor: "black"}} />
                        <Text style={{color: 'black', fontSize: 12}}>
                    Paises
                </Text>
                </View>
                    )
                }}
            />
            <Tab.Screen name="Dicas" 
            component={DicasCovid} options={{
                tabBarOptions: { showIcon: true, },
                tabBarIcon: () => (
                    <View>
                    <Image source={require('../icons/masc.png')} style={{width:40, height:40, tintColor: "black"}} />
                    <Text style={{color: 'black', fontSize: 12}}>
                    Dicas
                </Text>
                </View>
                )
            }}/>
            
            <Tab.Screen name="Option" 
            component={Hospital} 
            options={{
                tabBarOptions: { showIcon: true, },
                tabBarIcon: () => (
                    <View>
                    <Image source={require('../icons/hospital.png')} style={{width:40, height:40, tintColor: "black"}} />
                    <Text style={{color: 'black', fontSize: 12}}>
                    Hospital
                </Text>
                </View>
                )
            }}/>
             <Tab.Screen name="Lockdown" 
            component={Lockdown} 
            options={{
                    tabBarOptions: { showIcon: true, },
                    tabBarIcon: () => (
                        <View>
                        <Image source={require('../icons/lockdown.png')} style={{width:40, height:40, tintColor: "black"}} />
                        <Text style={{color: 'black', fontSize: 12, }}>
                    Quarentena
                </Text>
                </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
})
export default Tabs
