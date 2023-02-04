import React from "react";
import { View, Text, Image } from "react-native";
import { Button, ThemeProvider, Header,ListItem, Avatar, Input} from "react-native-elements";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-rKfA5hRAz7OznF1Z8flH5MjjC-J-3T4EA&usqp=CAU',
      subtitle: 'Cardiologista - USB Seattle - QUA 1/2/23 - 8h'
    }
  ]

export default function Horario({ navigation }) {
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
          centerComponent={{ text: "Adicionar Horários", style: { color: "#fff" } }}
          
        />
      </View>

      <div>
            <Input placeholder="Nome" />
            <Input placeholder="Especialidade" />
            <Input placeholder="UBS" />
            <Input placeholder="Data" />
            <Input placeholder="Horário" />
          </div>
          <ThemeProvider theme={button2}>
            <Button title="Adicionar" type="solid" onPress={()=>navigation.navigate('PerfilMedico')}/>
          </ThemeProvider>

          <ThemeProvider theme={button2}>
            <Button title="Excluir" type="solid" onPress={()=>navigation.navigate('PerfilMedico')}/>
          </ThemeProvider>
          {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }

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
