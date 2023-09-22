import React from "react"
import { Image } from "react-native"
import { StyleSheet } from "react-native"
import { View, Text } from "react-native"

export default function Perfil(props) {

    return (
        <View style={styles.perf}>
            <Text style={styles.texto}>{props.nome}</Text>
            <Image source={props.imagem} style={styles.img}/>
        </View>
    )

}

const styles = StyleSheet.create({
    perf: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 10
    },
    img: {
        width: 65,
        height: 65,
        flexDirection: 'row',
        backgroundColor: '#05B047',
        borderRadius: 50
    },
    texto: {
        fontSize: 18,
        fontWeight: '900',
        fontStyle: 'italic',
        marginRight: 5
    }
})