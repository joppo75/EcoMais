import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import User from '../../assets/Imagens/user.png';
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
                <Input nome="Username" />
                <Input nome="Password" />
                <Input nome="Foto" />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
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

    h1: {
        fontSize: 50,
        color: '#FFF',
        marginLeft: 10
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