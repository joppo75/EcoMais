import React from "react"
import { TouchableOpacity } from "react-native"
import { Image } from "react-native"
import { StyleSheet } from "react-native"
import { View, Text } from "react-native"

export default props => {

    return (
        <View style={styles.perf}>
            <Text style={styles.texto}>{props.nome}</Text>
            <TouchableOpacity>
                <Image source={props.imagem} style={styles.img} />
            </TouchableOpacity>

        </View>
    )

}

const styles = StyleSheet.create({
    perf: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 10,
        marginRight: 10,
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