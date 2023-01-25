import React from "react";
import { View, Text, Image } from "react-native";
import {
  Button,
  ThemeProvider,
  Header,
  ListItem,
  Avatar,
} from "react-native-elements";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
];

export default function ListaAtendimento({ navigation }) {
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
          centerComponent={{ text: "LISTA DE MÉDICOS", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
      </View>

      <View>
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
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
