import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navegacao from './src/Navigation/Navegacao';

export default function App() {
  return (
    <NavigationContainer>
      <Navegacao/>
    </NavigationContainer>
  );
}

