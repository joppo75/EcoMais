import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../Screens/Login";
import Cadastro from "../Screens/Cadastro";
import Home from "../Screens/Home";
import Calcular from "../Screens/Calcular";
import Tela3 from "../Screens/Tela3";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tabs = () =>{

    const nav = createBottomTabNavigator()

    return(
        <nav.Navigator screenOptions={{
            activeTintColor:'#FFF',
            activeBackgroundColor:'#000',
            inactiveBackgroundColor:'#FFF',
            inactiveTintColor:'#000',
            headerShown:false,
            labelStyle:{
                fontSize:30
            }
            }} initialRouteName="Home">
            <nav.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}>
            </nav.Screen>
            <nav.Screen name="Calcular" component={Calcular}
                options={{
                    tabBarLabel: 'Calcular',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}>
            </nav.Screen>
            <nav.Screen name="Histórico" component={Tela3}
                options={{
                    tabBarLabel: 'Histórico',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}>
            </nav.Screen>
            <nav.Screen name="Sair" component={Tela3}
                options={{
                    tabBarLabel: 'Sair',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}>
            </nav.Screen>
            
        </nav.Navigator>
    )

}

export default () => {

    const stack = createNativeStackNavigator()

    return(
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name="Login" component={Login}></stack.Screen>
            <stack.Screen name="Cadastro" component={Cadastro}></stack.Screen>
            <stack.Screen name="Tabs" component={Tabs}></stack.Screen>
        </stack.Navigator>
    )
}