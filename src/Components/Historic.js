import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import api from "../services/api";

export default () => {

    const [historico, setHistorico] = useState('');

    useEffect(() => {
        const obterHistorico = async () => {
            try {
                const response = await api.get('/api/gasCarbonicos');
                setHistorico(response.data.data);
                console.log(response.data.data);

            }
            catch (error) {
                //
            }
        };
        obterHistorico();
    }, []);

    return (

        <FlatList
            data={historico}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    <View style={styles.conteudo}>
                        <Text style={styles.historic}>{item.resultado}</Text>
                    </View>

                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({

    conteudo: {
        backgroundColor: '#fff',
        width: 300,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    historic: {
        fontSize: 20,
        fontWeight: "bold"
    }


})
