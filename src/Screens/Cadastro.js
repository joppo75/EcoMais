import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import User from '../../assets/Imagens/user.png';
import { TextInput } from "react-native";
import api from "../services/api";
import { useState } from "react";
import { Alert } from "react-native";

export default () => {

    //variaveis de estado
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //criando funcção singIn = aguarda o retorno
    singIn = async() => {

        api.post('/api/users',{
            name, email, username, password
        })

        .then(async(res) => {
            Alert.alert("Sucesso!","Usuário cadastrado com sucesso")
        })

        .catch (function (error) {
  
            // let resposta = error.response.data.errors;
            // var erro = "";
      
            // Object.keys(resposta).forEach(function(index){
      
            //   erro += " " + `${resposta[index]} \n`;
      
            // });
            
            Alert.alert("Erro", error);
      
        });
    }

   


    return (
        <View style={styles.container}>

            <View style={styles.row}>
                <Image source={User} />
                <Text style={styles.h1}>Cadastre-se</Text>
            </View>

            <View style={styles.col}>
                
                <TextInput 
                    onChangeText={text=>setName(text)} 
                    placeholder="Nome" 
                    style={styles.input}/>

                <TextInput 
                    onChangeText={text=>setEmail(text)} 
                    placeholder="E-mail" 
                    style={styles.input}/>

                <TextInput 
                    onChangeText={text=>setUsername(text)} 
                    placeholder="Username" 
                    style={styles.input}/>

                <TextInput 
                    onChangeText={text=>setPassword(text)} 
                    placeholder="Password" 
                    style={styles.input}/>


                <TouchableOpacity style={styles.button} onPress={this.singIn}>
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
    }
})