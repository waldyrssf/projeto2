import React from "react";
import { View, Text, Image } from "react-native";
import { Input, Button, ThemeProvider } from "react-native-elements";
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

export default function LoginCliente({ navigation }) {
  return (
    <View style={style.container}>
      <ImageBackground
        resizeMode="cover"
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
        <View style={[Vbutton.container, Vbutton.shadowProp]}>
          <Text style={Vbutton.text}>Cliente, logue-se abaixo.</Text>
          <div>
            <Image
              source={require("../assets/farmacia.png")}
              style={style.image}
            />
          </div>

          <Input placeholder="Email" />
          <Input placeholder="Senha" />

          <ThemeProvider theme={button1}>
            <Button title="Logar" onPress={()=>navigation.navigate('PerfilCliente')}/>
          </ThemeProvider>
        </View>
      </View>
    </View>
  );
}
