import React from "react";
import { View, Text, Image } from "react-native";
import { Button, ThemeProvider, Header, Avatar, Input} from "react-native-elements";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

export default function AlterarDadosMed({ navigation }) {
  return (
    <View style={style.container}>
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/gradient2.png")}
        style={style.image2}
      />

      <View>
        <Header
          leftComponent={<Button title="<" onPress={() => navigation.navigate("PerfilMedico")} />}
          centerComponent={{ text: "ALTERAR DADOS", style: { color: "#fff" } }}
          
        />
      </View>

      <div>
      <Input placeholder="Nome" />
            <Input placeholder="CRM" />
            <Input placeholder="Email" />
            <Input placeholder="Celular" />
            <Input placeholder="Senha" />
            <Input placeholder="Especialidade" />
            <Input placeholder="Data de Nascimento" />
          </div>
          <ThemeProvider theme={button2}>
            <Button title="Alterar" type="solid" onPress={()=>navigation.navigate('PerfilCliente')}/>
          </ThemeProvider>


    </View>
  );
}

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
    fontSize: 20,
    fontFamily: "corbel",
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
    position:"absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: 133,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 20,
  },

  image2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    },
});
