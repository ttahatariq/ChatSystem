import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home'
import VChat from "./VChat"
import Chat from './Chat'

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="VChat" component={VChat} />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
