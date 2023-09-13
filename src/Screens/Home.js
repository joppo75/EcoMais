import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default () => {

    return (
        <View style={styles.container}>

            <View style={styles.perf}>
                
            </View>

            <View style={styles.row}>
                <View style={styles.quaCalc}>
                    <Text style={styles.texto}>Calcular</Text>
                </View>
                <View style={styles.quaInfo}>
                    <Text style={styles.texto}>Informativos</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.quaHis}>
                    <Text style={styles.texto}>Histórico</Text>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    row: {
        flexDirection: 'row',
        position: 'relative',
        bottom: 100
    },
    quaCalc: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        borderRadius: 6,
        backgroundColor: '#FF7000',
    },
    quaInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        borderRadius: 6,
        backgroundColor: '#05B047',
        marginLeft: 10
    },
    quaHis: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        borderRadius: 6,
        backgroundColor: '#CDD100',
        marginTop: 10
    },
    texto:{
        color: '#fff',
        fontSize: 20
    }
})