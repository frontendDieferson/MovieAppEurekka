import React, { useState, useContext, useEffect } from "react";
import firebase from "../../config/firebaseConnection";

import {
  Container,
  Logo,
  TextLogo,
  Input,
  ContainerInput,
  Button,
  Text,
  ContainerInput2,
  Input2,
} from "./styles";
import { Platform } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import logo from "../../assets/logo.png";

import { AuthContext } from "../../Contexts/Auth";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export function SingIn() {
  function loginFirebase() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Algo deu errado :(");
      });
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("Logado" + user.uid);
        navigation.navigate("Home");
      } else {
        console.log("Não está logado");
      }
    });
  }, []);

  // Capturando os valores dos Inputs//
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [hidePass, setHidePass] = useState(true);

  const { signIn } = useContext(AuthContext);

  const navigation = useNavigation();

  return (
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enable>
        <Logo source={logo} />
        <TextLogo>Encontre o filme ideal para seu cinema...</TextLogo>
        <ContainerInput>
          <Input
            placeholder="E-mail"
            placeholderTextColor="#FFFFFF"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </ContainerInput>

        <ContainerInput2>
          <Input2
            placeholder="Senha"
            placeholderTextColor="#fff"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={hidePass}
          />
          <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
            {hidePass ? (
              <Ionicons name="eye" color="#fff" size={25} />
            ) : (
              <Ionicons name="eye-off" color="#fff" size={25} />
            )}
          </TouchableOpacity>
        </ContainerInput2>

        <Button onPress={() => loginFirebase()}>
          <Text>Login</Text>
        </Button>

        <Text
          style={{ marginTop: 30 }}
          onPress={() => navigation.navigate("SingUp")}
        >
          Criar conta
        </Text>
      </Container>

  );
}
export default SingIn;
