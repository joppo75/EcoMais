import react, { useEffect, useState } from "react";
import api from "../services/api";
import { FlatList } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

export default () => {

    const [info, setInfo] = useState('');

    useEffect(() => {
        const obterInformacao = async () => {
            try {
                const response = await api.get('/api/informativos');
                setInfo(response.data.data);
            }
            catch (error) {
                //
            }
        };
        obterInformacao();
    }, []);

    return (
        <FlatList
            data={info}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    <View style={styles.conteudo}>
                        <View style={styles.cardtitulo}>
                            <Text style={styles.titulo}>{item.Marca}</Text>
                        </View>
                        <Text style={styles.sub}>{item.Modelo}</Text>
                        <Text style={styles.descricao}>{item.Descricao}</Text>
                    </View>
                </View>
            )}
        />
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardtitulo: {
        backgroundColor: '#05B047',
        alignItems: 'center',
        justifyContent: 'center'
    },

    conteudo: {
        backgroundColor: '#fff',
        width: 350,
        height: 120,
        marginBottom: 15,
        borderRadius: 10
    },

    titulo: {
        fontSize: 24,
        color: '#fff'
    },

    sub: {
        fontSize: 18,
        margin: 5
    },

    descricao:{
        fontSize: 16,
        margin: 5
    }
});