import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Perfil from "../Components/Perfil";
import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"


export default (props) => {

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => { props.navigation.navigate('Editar') }}>
                <Perfil />
            </TouchableOpacity>


            <View style={styles.conteudo}>
                <View style={styles.row}>
                    <View style={styles.quaCalc}>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('Calcular') }}>
                            <Text style={styles.texto}>Calcular</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.quaInfo}>
                        <TouchableOpacity style={styles.texto} onPress={() => { props.navigation.navigate('Informativo') }}>
                            <Text style={styles.texto}>Informativos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.quaHis}>
                        <TouchableOpacity style={styles.texto} onPress={() => { props.navigation.navigate('Historico') }}>
                            <Text style={styles.texto}>Histórico</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    conteudo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        position: 'relative',
        bottom: 100
    },
    quaCalc: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        borderRadius: 6,
        backgroundColor: '#FF7000',
    },
    quaInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        borderRadius: 6,
        backgroundColor: '#05B047',
        marginLeft: 10
    },
    quaHis: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        borderRadius: 6,
        backgroundColor: '#CDD100',
        marginTop: 10
    },
    texto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '900'
    },

    
})