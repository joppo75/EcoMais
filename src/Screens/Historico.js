import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InputCH from "../Components/InputCH";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

export default props => {

    return (

        <View style={styles.container}>

            <View style={styles.card}>
                <Text style={styles.h1}>
                    <MaterialCommunityIcons name="list-status" size={35} color={'#fff'} />Histórico
                </Text>
                <InputCH />
                <InputCH />
                <InputCH />
                <InputCH />

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    h1: {
        fontSize: 35,
        color: '#FFF',
        position: 'relative',
        bottom: 80
    },
    texto: {
        fontSize: 20,
        color: '#FFF',
        marginTop: 5,
        marginBottom: 1,
    },
    card: {
        flex: 1,
        backgroundColor: '#044929',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },


})