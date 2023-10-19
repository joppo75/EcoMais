import React from "react";
import { StyleSheet, TextInput } from "react-native";


export default props => {
    return(
        <TextInput placeholder={props.nome} style={styles.input} />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 45,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginTop: 5,
        padding: 10
    },
})