import React from "react";
import { View, Text, Image } from "react-native";
import { Input, Button, ThemeProvider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { color } from "react-native-elements/dist/helpers";

import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

const button1 = {
  Button: {
    buttonStyle: {
      backgroundColor: "#6865F7",
      borderRadius: 30,

      width: "100%",
      marginVertical: 10,
      paddingVertical: 25,
      paddingHorizontal: 82,

      shadowColor: "#171717",
      shadowOffset: { width: -1, height: 2.5 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    buttonText: {
      fontSize: 18,
      fontFamily: "Gill Sans",
      textAlign: "center",
      margin: 10,
      color: "#ffffff",
      backgroundColor: "transparent",
    },
  },
};
const button2 = {
  Button: {
    buttonStyle: {
      backgroundColor: "#6865F7",
      borderRadius: 30,
      width: "100%",

      marginVertical: 10,
      paddingVertical: 15,
      paddingHorizontal: 70,

      shadowColor: "#171717",
      shadowOffset: { width: -1, height: 2.5 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    buttonText: {
      fontSize: 18,
      fontFamily: "Gill Sans",
      textAlign: "center",
      margin: 10,
      color: "#ffffff",
      backgroundColor: "transparent",
    },
  },
};
const Vbutton = {
  container: {
    backgroundColor: "transparent",
    borderRadius: 30,
    width: "100%",
    
    marginTop: 30,
    marginBottom: 30,
    paddingVertical: 40,
    paddingHorizontal: 60,
    justifyContent: "center",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  text: {
    fontSize: 50,
    fontFamily: "corbel",
    color:'#6865F7',
    textAlign: "justify",
    justifyContent: "center",
    marginLeft: 15,
    marginBottom: 5,
    marginTop: 10
    
  },

  input: {
    marginBottom:0,
  }
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    
    
    position: 'absolute',
   
    width: "25%",
    height: 85,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 0,
    marginBottom: 10,
  },

  image2: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 350,
    position: "relative",
  },
});

export default function CadastroCliente({ navigation }) {
  return (
    <View style={style.container}>
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/gradientCad.png")}
        style={style.image2}
      />
      <View
        style={{
          position: "absolute",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: 20,
        }}
      >
         <div style={{
          flexDirection: 'row-reverse',
          marginBottom: 90,
          marginLeft:90}}>
            <Image
              source={require("../assets/farmacia.png")}
              style={style.image}
            />
          </div>
        <View style={[Vbutton.container, Vbutton.shadowProp]}>
          
          <Text style={Vbutton.text}>Cadastro</Text>

         

          <div>
            <Input style={Vbutton.input} placeholder="Nome" />
            <Input style={Vbutton.input} placeholder="CPF" />
            <Input style={Vbutton.input} placeholder="Email" />
            <Input style={Vbutton.input} placeholder="Celular" />
            <Input style={Vbutton.input} placeholder="Senha" />
            <Input style={Vbutton.input} placeholder="Cartão do SUS" />
            <Input style={Vbutton.input} placeholder="Data de Nascimento" />
          </div>
          <ThemeProvider theme={button2}>
            <Button title="Cadastrar" type="solid" onPress={()=>navigation.navigate('InicialCli')}/>
          </ThemeProvider>

        </View>
      </View>
    </View>
  );
}
