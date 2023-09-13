import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Input from "../Components/Input";


export default () => {

    return (
        <View style={styles.container}>

            <View style={styles.row}>
                <Image source={User} />
                <Text style={styles.h1}>Cadastre-se</Text>
            </View>

            <View style={styles.col}>
                <Input nome="Nome" />
                <Input nome="E-mail" />
                <Input nome="Foto" />
                <TouchableOpacity style={styles.button} onPress={props.teste}>
                    <Text style={styles.buttonText}>{props.nome}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#044929',
    },
    row: {
        flexDirection: 'row',
        position: 'relative',
        bottom: 100
    },
    col: {
        width: '80%',
        position: 'relative',
        bottom: 20
    },
    button: {
        height: 40,
        alignItems: 'center',
        backgroundColor: '#608EE7',
        padding: 10,
        borderRadius: 10,
        position: 'relative',
        top: 50
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20
    }
})