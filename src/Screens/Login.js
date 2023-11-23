import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import Arvore from "../../assets/Imagens/login.png";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"

export default props => {

    //variaveis de estado
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    //função entrar
    singIn = async () => {

        api.post('/api/login', {
            username, password
        })

            .then(async (res) => {
                await AsyncStorage.setItem('token', res.data.token);
                await AsyncStorage.setItem('usuario', JSON.stringify(res.data.usuario));
                props.navigation.navigate("Tabs");
                setUsername('');
                setPassword('');

            })

            .catch(function (error) {

                if (error.response.data.errors) {
                    let resposta = error.response.data.errors;
                    var erro = "";

                    Object.keys(resposta).forEach(function (index) {

                        erro += " " + `${resposta[index]} \n`;

                    });
                    Alert.alert("Erro", erro);
                }
                else {
                    Alert.alert("Erro", "Usuário não encontrado!")
                }

            });

    }


    return (
        <View style={styles.container}>

            <Image source={Arvore} style={styles.img} />

            <View style={styles.col}>

                <TextInput
                    onChangeText={text => setUsername(text)}
                    placeholder="Username"
                    maxLength={15}
                    style={styles.input} />

                <TextInput
                    onChangeText={text => setPassword(text)}
                    placeholder="Password"
                    secureTextEntry={true}
                    maxLength={15}
                    style={styles.input} />

                <TouchableOpacity style={styles.button} onPress={this.singIn}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.buttonLink} onPress={() => { props.navigation.navigate('Cadastro') }}>
                <Text style={styles.buttonlinkText}>Cadastar</Text>
            </TouchableOpacity>
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
    col: {
        width: '80%',
        position: 'relative',
        bottom: 20,
        marginBottom: 25
    },
    img: {
        position: 'relative',
        bottom: 80
    },

    input: {
        width: '100%',
        height: 45,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginTop: 5,
        padding: 10
    },

    button: {
        height: 40,
        alignItems: 'center',
        backgroundColor: '#05B047',
        padding: 8,
        borderRadius: 10,
        position: 'relative',
        top: 50
    },
    buttonText: {
        color: '#FFF',
        fontSize: 22
    },
    buttonLink: {
        position: 'relative',
        top: 10,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
    },
    buttonlinkText: {
        color: '#FFF',
        fontSize: 18,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
    }

})