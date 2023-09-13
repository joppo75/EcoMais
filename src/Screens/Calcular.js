import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InputCH from "../Components/InputCH";

export default () => {
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.h1}>Calculo Gás carbônico automotivo</Text>

                <Text style={styles.texto}>Informe o combustivel</Text>
                <InputCH nome="selecionar"/>

                <Text style={styles.texto}>Quantidade de litros abastecidos:</Text>
                <InputCH/>

                <Text style={styles.texto}>Quantidade de KM rodado:</Text>
                <InputCH/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <Text style={styles.texto}>Calculo gasto</Text>
                <InputCH nome="selecionar"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    h1: {
        fontSize: 25,
        color: '#FFF',
        marginBottom: 20
    },
    texto:{
        fontSize: 20,
        color: '#FFF',
        marginTop:5,
        marginBottom: 1,
    },
    card:{
        width: 350,
        height: 500,
        backgroundColor: '#044929',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: 40,
        alignItems: 'center',
        backgroundColor: '#608EE7',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        marginBottom:10
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20
    }
})