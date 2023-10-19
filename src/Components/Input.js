import React from "react";
import { StyleSheet, TextInput } from "react-native";


export default function Input(props){
    return(
        <TextInput placeholder={props.nome} style={styles.input} />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 45,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginTop: 5,
        padding: 10
    },
})