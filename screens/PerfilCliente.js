import React from "react";
import { View, Text, Image } from "react-native";
import { Button, ThemeProvider, Header, Avatar } from "react-native-elements";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

export default function PerfilCliente({ navigation }) {
  return (
    <View style={style.container}>
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/gradient2.png")}
        style={style.image2}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          top: 0,
          zindex: 99,
          justifyContent: "start",
        }}
      >
        <Header
          containerStyle={{
            backgroundColor: "transparent",
          }}
          centerComponent={{ text: "PERFIL", style: { color: "#fff" } }}
         
        />
      </View>

      <View
        style={{
          position: "absolute",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: 40,
        }}
      >
        <Avatar
          rounded
          size="xlarge"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQJBbd-ajtZI5CWaLNaEerRzeqqoP9lEPAfsAum424fdDXJS6I9uKvzYmIqRDsENB4eQ&usqp=CAU",
          }}
        />

        <View>
          <ThemeProvider theme={button1}>
            <Button
              onPress={() => navigation.navigate("ListaAtend")}
              title="Lista de atendimentos"
            />
            <Button
              onPress={() => navigation.navigate("AlterarDados")}
              title="Alterar Dados"
            />
            <Button
              onPress={() => navigation.navigate("LoginCliente")}
              title="SAIR"
            />
          </ThemeProvider>
        </View>
      </View>
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
    position: "absolute",
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
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 350,
    position: "relative",
  },
});
