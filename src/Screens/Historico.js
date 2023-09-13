import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InputCH from "../Components/InputCH";

export default () => {

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.h1}>Histórico</Text>
                <InputCH/>
                <InputCH/>
                <InputCH/>
                <InputCH/>
            </View>
        </View>

    );
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
    }
})