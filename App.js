import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from './screens/Inicial';
import InicialCli from './screens/InicialCli';
import InicialMed from './screens/InicialMed'
import LoginCliente from './screens/LoginCliente';
import LoginMedico from './screens/LoginMedico';
import CadastroMedico from './screens/CadastroMedico';
import CadastroCliente from './screens/CadastroCliente';
import PerfilCliente from './screens/PerfilCliente';
import PerfilMedico from './screens/PerfilMedico';
import ListaAtendimento from './screens/ListaAtend';
import AlterarDadosMed from './screens/AlterarDadosMed';
import AlterarDadosCli from './screens/AlterarDadosCli';


const Stack = createNativeStackNavigator();

export default function App() {
return (
<NavigationContainer >
<Stack.Navigator >
<Stack.Screen name="PerfilMedico" component={PerfilMedico} />
<Stack.Screen name="PerfilCliente" component={PerfilCliente} />
<Stack.Screen name="ListaAtend" component={ListaAtendimento}/>
<Stack.Screen name="AlterarDadosCli" component={AlterarDadosCli}/>
<Stack.Screen name="AlterarDadosMed" component={AlterarDadosMed}/>
<Stack.Screen name="Inicial" component={Inicial}/>


<Stack.Screen name="InicialMed" component={InicialMed}/>
<Stack.Screen name="InicialCli" component={InicialCli}/>

<Stack.Screen name="LoginMedico" component={LoginMedico} />
<Stack.Screen name="LoginCliente" component={LoginCliente} />

<Stack.Screen name="CadastroMedico" component={CadastroMedico} />
<Stack.Screen name="CadastroCliente" component={CadastroCliente} />


</Stack.Navigator>
</NavigationContainer>
);
}


