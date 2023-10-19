import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Input from "../Components/Input";
import Arvore from "../../assets/Imagens/login.png";

export default props => {
    // <Text>Loginsss</Text>
    // <Button title="Entrar" onPress={()=>{props.navigation.navigate('Tabs')}}></Button>
    // <Button title="Cadastro" onPress={()=>{props.navigation.navigate('Cadastro')}}></Button>
    return (
        <View style={styles.container}>

            <Image source={Arvore} style={styles.img} />

            <View style={styles.col}>
                <Input nome="Username" />
                <Input nome="PassWord" />
                <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Tabs') }}>
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
    buttonLink:{
        position: 'relative',
        top: 10,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
    },
    buttonlinkText:{
        color: '#FFF',
        fontSize: 18,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
    }

})