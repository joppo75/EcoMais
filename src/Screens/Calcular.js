import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Perfil from "../Components/Perfil";
import { Picker } from '@react-native-picker/picker';
import api from "../services/api";

export default (props) => {

    const [selectinfo, setSelectInfo] = useState(1);
    const [litros, setLitros] = useState('');
    const [km, setKm] = useState('');
    const [calcular, setCalcular] = useState('');


    singIn = async() => {

        let valor = 0;
        let combust = 2.3;
        let combustDiesel = 2.7;

        if(selectinfo === 1 || selectinfo === 2){

            valor = (parseFloat(litros) * combust)
            setCalcular(valor)
        }
        else {

            valor = (parseFloat(litros) * combustDiesel)
            setCalcular(valor)
        }

        api.post('/api/gasCarbonicos',{
            id_combustivels: selectinfo, qtd_listros: litros, qtd_km: km, resultado: calcular
        })

        .then(async(res) => {
            //Alert.alert("Sucesso!","Calculo cadastrado com sucesso")
            console.log(selectinfo, litros, km, calcular)
            console.log(res.data)
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

            <TouchableOpacity onPress={() => { props.navigation.navigate('Editar') }}>
                <Perfil />
            </TouchableOpacity>

            <View style={styles.conteudo}>

                <View style={styles.titulo}>
                    <MaterialCommunityIcons name="calculator-variant" size={35} color={'#fff'} />
                    <Text style={styles.h1}>Calculo Gás carbônico</Text>
                </View>

                <Text style={styles.texto}><MaterialCommunityIcons name="fuel" size={23} />Informe o combustivel</Text>
                <View style={styles.inputPicker}>
                    <Picker style={styles.picker}
                        selectedValue={selectinfo}
                        onValueChange={(itemValue, itemIndex) => setSelectInfo(itemValue)}
                    >
                        <Picker.Item style={styles.item}  label="Gasolina" value={1} />
                        <Picker.Item style={styles.item} label="Etanol" value={2} />
                        <Picker.Item style={styles.item} label="Diesel" value={3} />
                    </Picker>

                </View>


                <Text style={styles.texto}>
                    <MaterialCommunityIcons name="application-edit" size={23} />Quantidade de litros abastecidos:
                </Text>
                <TextInput
                    onChangeText={text=>setLitros(text)} 
                    style={styles.input} 
                />

                <Text style={styles.texto}>
                    <MaterialCommunityIcons name="car-back" size={23} />Quantidade de KM rodado:
                </Text>
                <TextInput
                    onChangeText={text=>setKm(text)} 
                    style={styles.input} 
                />

                <TouchableOpacity style={styles.button} onPress={this.singIn}>
                    <Text style={styles.buttonText}>Calcular</Text>
                </TouchableOpacity>

                <Text style={styles.texto}>
                    <MaterialCommunityIcons name="calculator-variant-outline" size={23} />Calculo gasto
                </Text>
                <Text style={styles.input} >
                    {calcular + "Kg CO2"} 
                </Text>
                   
                    
                
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
        fontSize: 35,
        color: '#FFF',
    },

    texto: {
        fontSize: 21,
        color: '#FFF',
        marginTop: 5,
        marginBottom: 3,
    },

    picker:{
        fontSize: 18,
        color: '#000',
    },

    item:{
        color: '#05B047',
    },

    inputPicker:{
        width: '80%',
        height: 45,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginBottom: 10
    },

    input: {
        width: '80%',
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

})