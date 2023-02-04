import React from "react";
import { View, Text, Image } from "react-native";
import {
Button,
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
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-rKfA5hRAz7OznF1Z8flH5MjjC-J-3T4EA&usqp=CAU",
subtitle: "Cardiologista - USB Seattle - QUA 1/2/23 - 8h",
},
{
name: "Chris Jackson",
avatar_url:
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&usqp=CAU",
subtitle: "Dermatologista - USB Jefferson - QUI 9/2/23 - 9h",
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


  <Header
    leftComponent={
      <Button title="<" onPress={() => navigation.navigate("PerfilCliente")} />
    }
    centerComponent={{ text: "LISTA DE MÉDICOS", style: { color: "#fff" } }}
  />

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

const style = StyleSheet.create({
container: {
flex: 1,
flexDirection: "column",
justifyContent: "center",
},
image2: {
position: "absolute",
width: "100%",
height: "100%",
},
});
