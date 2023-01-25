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

      paddingVertical: 25,

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

    backgroundColor: "#ffff",
    borderRadius: 30,
    width: "100%",
    margin: 1,
    paddingVertical: 60,

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

    fontSize: 30,
    fontFamily: "corbel",
    color:'#6865F7',
    textAlign: "justify",
    justifyContent: "center",
    marginLeft: 15,
    marginBottom: 5
    marginTop: 10

    fontSize: 20,
    fontFamily: "fantasy",
    textAlign: "center",
    justifyContent: "center",

  },
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

    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: 140,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 20,

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

        source={require("../assets/gradient2.png")}

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

        <View style={[Vbutton.container, Vbutton.shadowProp]}>
          
          <Text style={Vbutton.text}>Cadastro</Text>

          <div>

            <Image
              source={require("../assets/farmacia.png")}
              style={style.image}
            />
          </div>

        <View style={[Vbutton.container, Vbutton.shadowProp]}>
          
          <Text style={Vbutton.text}>Cadastro</Text>

         



          <div>
            <Input placeholder="Nome" />
            <Input placeholder="CPF" />
            <Input placeholder="Email" />
            <Input placeholder="Celular" />
            <Input placeholder="Senha" />
            <Input placeholder="Cartão do SUS" />
            <Input placeholder="Data de Nascimento" />
          </div>
          <ThemeProvider theme={button2}>
            <Button title="Cadastrar" type="solid" onPress={()=>navigation.navigate('InicialCli')}/>
          </ThemeProvider>

        </View>
      </View>
    </View>
  );
}
