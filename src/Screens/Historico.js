import React, { useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native";
import Perfil from "../Components/Perfil";
import api from "../services/api";

export default props => {

    const [historico, setHistorico] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout * 1000);
        });
    };

    const recarregar = useCallback(async () => {

        setRefreshing(true);

        try {
            const response = await api.get('/api/gasCarbonicos');
            setHistorico(response.data.data);

        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }

        setRefreshing(false);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/api/gasCarbonicos');
                setHistorico(response.data.data);
            } catch (error) {
                console.error('Erro ao carregar dados:', error);
            }
        };

        fetchData();

    }, [recarregar]);

    return (

        <View style={styles.container}>

            <TouchableOpacity onPress={() => { props.navigation.navigate('Editar') }}>
                <Perfil />
            </TouchableOpacity>

            <View style={styles.conteudo}>

                <View style={styles.titulo}>
                    <MaterialCommunityIcons name="list-status" size={35} color={'#fff'} />
                    <Text style={styles.h1}>Histórico</Text>
                </View>


                <FlatList
                    data={historico}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={recarregar}
                        />
                    }
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <View style={styles.conteudo_historico}>
                                <Text style={styles.historic}>{item.resultado}</Text>
                            </View>
                        </View>
                    )}
                />


                <View style={styles.plus}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Calcular') }}>
                        <MaterialCommunityIcons name="clipboard-plus" size={35} color={'#fff'} />
                    </TouchableOpacity>
                </View>

            </View>

        </View>


    );
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

    card: {
        width: '100%',
        backgroundColor: '#044929',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
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

    titulo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    plus: {
        width: '75%',
        bottom: 50,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },


    conteudo_historico: {
        backgroundColor: '#fff',
        width: 300,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },

    historic: {
        fontSize: 20,
        fontWeight: "bold"
    }


})