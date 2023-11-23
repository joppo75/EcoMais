import React from "react";
import {TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import Perfil from "../Components/Perfil";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

    titulo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginTop: 50
    },

})