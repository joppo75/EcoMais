import React from "react";
import { StyleSheet, Text, View } from "react-native";


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native";
import Perfil from "../Components/Perfil";
import { Image } from "react-native";
import Historic from "../Components/Historic";

export default props => {

    return (


        <View style={styles.container}>


            <TouchableOpacity onPress={() => { props.navigation.navigate('Editar') }}>
                <Perfil />
            </TouchableOpacity>

            <View style={styles.conteudo}>

                <View style={styles.titulo}>
                    <MaterialCommunityIcons name="list-status" size={35} color={'#fff'} />
                    <Text style={styles.h1}>Histórico</Text>
                </View>

                <View style={styles.card}>
                    <Historic />
                </View>



                <View style={styles.plus}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Calcular') }}>
                        <MaterialCommunityIcons name="clipboard-plus" size={35} color={'#fff'} />
                    </TouchableOpacity>
                </View>

            </View>


        </View>

    );
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

    card: {
        width: '100%',
        backgroundColor: '#044929',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    h1: {
        fontSize: 27,
        color: '#FFF',
    },

    texto: {
        fontSize: 18,
        color: '#FFF',
        marginTop: 5,
        marginBottom: 1,
    },

    titulo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
    },
    plus: {
        width: '75%',
        top: 50,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

    }

})