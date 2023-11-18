import React, { useEffect, useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import Perfil from "../Components/Perfil";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from "../services/api";
import Informativo from "../Components/Informativo";


export default props => {


    return (

        <View style={styles.container}>

            <TouchableOpacity onPress={() => { props.navigation.navigate('Editar') }}>
                <Perfil />
            </TouchableOpacity>

            <View style={styles.conteudo}>

                <View style={styles.titulo}>
                    <MaterialCommunityIcons name="account-wrench" size={35} color={'#fff'} />
                    <Text style={styles.h1}>Informativos</Text>
                </View>

                <Informativo/>

            </View>


        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    conteudo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#044929',
        borderRadius: 10,
    },

    h1: {
        fontSize: 35,
        color: '#FFF',
    },

    texto: {
        fontSize: 18,
        color: '#FFF',
        marginTop: 5,
        marginBottom: 1,
    },

    button: {
        width: '80%',
        height: 40,
        alignItems: 'center',
        backgroundColor: '#05B047',
        padding: 10,
        borderRadius: 10,
        marginTop: 25,
        marginBottom: 25
    },

    buttonText: {
        color: '#FFF',
        fontSize: 20
    },

    titulo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        marginTop: 80
    },

    group: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    input: {
        width: '80%',
        height: 45,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginTop: 5,
        padding: 10
    },

})