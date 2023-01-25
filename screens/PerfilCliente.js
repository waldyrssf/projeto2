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

      <View>
        <Header
          leftComponent={{
            text: "<",
            style: { color: "#fff" },
            position: "absolute",
          }}
          centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
      </View>

      <Avatar
        rounded
        size="xlarge"
        source={{
          uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        }}
      />

      <View>
        <ThemeProvider theme={button1}>
          <Button
            onPress={() => navigation.navigate("")}
            title="Lista de atendimentos"
          />
          <Button
            onPress={() => navigation.navigate("")}
            title="Alterar Dados"
          />
        </ThemeProvider>
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
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 350,
    position: "relative",
  },
});
