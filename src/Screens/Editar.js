import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View, Text, StyleSheet} from "react-native";
import Perfil from "../Components/Perfil";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from "@react-native-async-storage/async-storage"


export default () => {

    //variaveis de estado
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [usuario, setUsuario] = useState('');

    useEffect(() => {
        const obterUsuario = async () => {
          try {
            const usuarioSalvo = await AsyncStorage.getItem('usuario');
            if (usuarioSalvo) {
              setUsuario(JSON.parse(usuarioSalvo));
            }
          } catch (error) {
            console.error('Erro ao obter o usuário:', error);
          }
        };
    
        obterUsuario();
      }, []);


    return (

        <View style={styles.container}>


            <Perfil nome="João" />


            <View style={styles.conteudo}>

                <View style={styles.titulo}>
                    <MaterialCommunityIcons name="account-wrench" size={45} color={'#fff'} />
                    <Text style={styles.h1}>Editar Usuário</Text>
                </View>

                <View style={styles.group}>
                    <TextInput
                        defaultValue={usuario.name}
                        onChangeText={text => setName(text)}
                        placeholder="Nome"
                        style={styles.input} />

                    <TextInput
                        defaultValue={usuario.email}
                        onChangeText={text => setEmail(text)}
                        placeholder="E-mail"
                        style={styles.input} />

                    <TextInput
                        defaultValue={usuario.username}
                        onChangeText={text => setUsername(text)}
                        placeholder="Username"
                        style={styles.input} />

                </View>


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>

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
        fontSize: 30,
        color: '#FFF',
    },
    texto: {
        fontSize: 18,
        color: '#FFF',
        marginTop: 5,
        marginBottom: 1,
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
    group: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    input: {
        width: '80%',
        height: 45,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginTop: 5,
        padding: 10
    },

})