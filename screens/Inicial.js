import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";

export default function Inicial({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Bem-vind@ ao App TAL</Text>
      <div>
        <Image source={require("../assets/índice.jpg")} />
      </div>
      <Button onPress={() => navigation.navigate("Login")} title="Login" />

      <Button
        onPress={() => navigation.navigate("Cadastro")}
        title="Cadastro"
      />
    </View>
  );
}

