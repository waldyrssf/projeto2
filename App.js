import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from './screens/Inicial';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import LoginCliente from './screens/LoginCliente';
import LoginMedico from './screens/LoginMedico';
import CadastroMedico from './screens/CadastroMedico';
import CadastroCliente from './screens/CadastroCliente';


const Stack = createNativeStackNavigator();

export default function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Inicial" component={Inicial} />
<Stack.Screen name="Login" component={Login} />
<Stack.Screen name="LoginCliente" component={LoginCliente} />
<Stack.Screen name="LoginMedico" component={LoginMedico} />
<Stack.Screen name="Cadastro" component={Cadastro} />
<Stack.Screen name="CadastroCliente" component={CadastroCliente} />
<Stack.Screen name="CadastroMedico" component={CadastroMedico} />
</Stack.Navigator>
</NavigationContainer>
);
}


