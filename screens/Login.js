import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Input, Button, ThemeProvider } from "react-native-elements";
import { ImageBackground } from "react-native-web";
const button1 = {
  Button:{
  buttonStyle: {
    backgroundColor: '#6865F7',
    borderRadius: 30,

    width: '100%',
    marginVertical: 10,
    paddingVertical: 25,
    paddingHorizontal: 62,

    shadowColor: '#171717',
      shadowOffset: {width: -1, height: 2.5},
      shadowOpacity: 0.2,
      shadowRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  },
  };
  const button2 = {
    Button:{
    buttonStyle: {
      backgroundColor: 'tranparent',
      borderRadius: 30,
      width: '100%',
      
      marginVertical: 0,
      paddingVertical: 0,
      paddingHorizontal: 50,

      shadowColor: '#171717',
      shadowOffset: {width: -1, height: 2.5},
      shadowOpacity: 0,
      shadowRadius: 3,
    },
    buttonText: {
      color: '#000000',
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      backgroundColor: 'transparent',
    },
    },
    };
    const Vbutton = {
      container: {
      
        backgroundColor: 'transparent',
        borderRadius: 30,
        width: '100%',
        margin: 1,
        paddingVertical: 60,
        paddingHorizontal: 80,
        position: 'absolute',
        justifyContent:'center',
        
      },
      shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: 0.15,
        shadowRadius: 3,
      },
      text: {
        fontSize: 20,
      fontFamily: 'Gill Sans',
      textAlign: 'justify',
    
      }
    };
  const style =StyleSheet.create({
    container: {
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'center',
    },    
    image: {
     
     justifyContent:'center',
     alignItems:'center',
     width: '60%',
     height: 128.5,
     marginLeft:40,
     marginRight:40,
     marginTop:20,
     marginBottom: 20,
    },
   
    image2: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems:'center',
      width: '100%',
      paddingVertical: 350,
      position:'relative'
      
    },
   });
  
  export default function LoginScreen({navigation}) {
    return (
      <View style={style.container}>
      <ImageBackground resizeMode="cover" source={require("../assets/gradientLog.png")} style={style.image2} />
      <View style={Vbutton.container}>
        <View style={{ flex: 3, alignItems: "center", paddingTop: 30 }}>
          <Avatar
            size="large"
            rounded
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/1946/1946429.png",
            }}
          />
        </View>
  
        <View style={{ flex: 5, paddingTop: 30 }}>
        <Text>  Login</Text>
          <Input/>
          <Text>  Senha</Text>
          <Input/>
        </View>
  
  
        <View>
          <ThemeProvider theme={button1}>
          <Button title="Login" type="solid" onPress={()=>navigation.navigate('Listar')}/>
          </ThemeProvider>
        </View>
  
        
        <View>
            <ThemeProvider theme={button2}>
          <Button  style={button2.buttonText} title="Cadastre-se" type="solid" onPress={()=>navigation.navigate('Cadastro')}/>
          </ThemeProvider>
        </View>
        </View>
      </View>
    );
  };
  

  

