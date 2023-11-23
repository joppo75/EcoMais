import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import img from "../../assets/Imagens/perfil.png";

export default props => {

  const [usuario, setUsuario] = useState('');


  useEffect(() => {
    const obterUsuario = async () => {
      try {
        const usuarioSalvo = await AsyncStorage.getItem('usuario');
        if (usuarioSalvo) {
          setUsuario(JSON.parse(usuarioSalvo));
        }
      } catch (error) {
        console.error('Erro ao obter o usuário do AsyncStorage:', error);
      }
    };

    obterUsuario();
  }, []);

  return (
    <View style={styles.perf}>
      <Text style={styles.texto}>{usuario.name}</Text>
      <Image source={img} style={styles.img} />
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
    fontSize: 20,
    fontWeight: '900',
    fontStyle: 'italic',
    marginRight: 5
  }
})