import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import InputCH from "../Components/InputCH";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Perfil from "../Components/Perfil";

export default (props) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => { props.navigation.navigate('Editar') }}>
                <Perfil nome="João" />
            </TouchableOpacity>

            <View style={styles.conteudo}>

                <View style={styles.titulo}>
                    <MaterialCommunityIcons name="calculator-variant" size={35} color={'#fff'} />
                    <Text style={styles.h1}>Calculo Gás carbônico</Text>
                </View>

                

                {/* <Text style={styles.texto}>
                    <MaterialCommunityIcons name="fuel" size={23} />Informe o combustivel
                </Text> */}
                <InputCH nome="selecionar" />

                <Text style={styles.texto}>
                    <MaterialCommunityIcons name="application-edit" size={23} />Quantidade de litros abastecidos:
                </Text>
                <InputCH />

                <Text style={styles.texto}>
                    <MaterialCommunityIcons name="car-back" size={23} />Quantidade de KM rodado:
                </Text>
                <InputCH />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <Text style={styles.texto}>
                    <MaterialCommunityIcons name="calculator-variant-outline" size={23} />Calculo gasto
                </Text>
                <InputCH />
            </View>


        </View>
    )
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

    button: {
        width: '80%',
        height: 40,
        alignItems: 'center',
        backgroundColor: '#05B047',
        padding: 10,
        borderRadius: 10,
        marginTop: 25,
        marginBottom: 25
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20
    },
    titulo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50
    },

})