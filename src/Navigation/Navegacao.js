import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../Screens/Login";
import Cadastro from "../Screens/Cadastro";
import Home from "../Screens/Home";
import Calcular from "../Screens/Calcular";
import Historico from "../Screens/Historico";
import Editar from "../Screens/Editar";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Informativos from "../Screens/Informativos";


const Tabs = () => {

    const nav = createBottomTabNavigator()

    return (
        <nav.Navigator
            screenOptions={{
                activeTintColor: '#FFF',
                activeBackgroundColor: '#000',
                inactiveBackgroundColor: '#FFF',
                inactiveTintColor: '#000',
                headerShown: false,
                labelStyle: {
                    fontSize: 30
                },

            }} initialRouteName="Home">
            <nav.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={35} />
                    ),
                }}>
            </nav.Screen>
            <nav.Screen name="Calcular" component={Calcular}
                options={{
                    tabBarLabel: 'Calcular',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="calculator" color={color} size={35} />
                    ),
                }}>
            </nav.Screen>
            <nav.Screen name="Histórico" component={Historico}
                options={{
                    tabBarLabel: 'Histórico',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="clipboard-list-outline" color={color} size={35} />
                    ),
                }}>
            </nav.Screen>

            <nav.Screen name="Informativos" component={Informativos}
                options={{
                    tabBarLabel: 'Informativos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book-education-outline" color={color} size={35} />
                    ),
                }}>
            </nav.Screen>

        </nav.Navigator>
    )

}



export default () => {

    const stack = createStackNavigator()

    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
            <stack.Screen name="Login" component={Login}></stack.Screen>
            <stack.Screen name="Cadastro" component={Cadastro}></stack.Screen>
            <stack.Screen name="Editar" component={Editar}></stack.Screen>
            <stack.Screen name="Calcular" component={Calcular}></stack.Screen>
            <stack.Screen name="Historico" component={Historico}></stack.Screen>
            <stack.Screen name="Informativo" component={Informativos}></stack.Screen>
            <stack.Screen name="Home" component={Home}></stack.Screen>
            <stack.Screen name="Tabs" component={Tabs}></stack.Screen>
        </stack.Navigator>
    )
}
