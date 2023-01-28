import axios from "axios";
import { StatusBar } from "expo-status-bar";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import appStyles from "./styles/appStyles";

export default function App() {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const logInAndGetSchedual = async () => {
    await axios.post('http://localhost:8001/userLogIn', { login, password })
      .then(function (response) {
        // Создание cookie для логина и пароля, создание localStorage записи для расписания
        Cookies.set("login", login);
        Cookies.set("password", password);
        localStorage.setItem('Schedual', JSON.stringify(response.data));
        let a = JSON.parse(localStorage.getItem('Schedual'))
        console.log(a['Понедельник'])

      })
      .catch(function (error) { // если получили ошибку
        console.log(error);
      });
  };

  return (
    <View style={appStyles.container}>
      <StatusBar style="auto" />

      <View style={appStyles.inputView}>
        <TextInput
          style={appStyles.TextInput}
          placeholder="Логин "
          placeholderTextColor="#003f5c"
          onChangeText={(login) => setLogin(login)}
        />
      </View>

      <View style={appStyles.inputView}>
        <TextInput
          style={appStyles.TextInput}
          placeholder="Пароль"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={appStyles.loginBtn} onPress={logInAndGetSchedual}>
        <Text style={appStyles.loginText}>LOGIN</Text>
      </TouchableOpacity>

    </View>
  );
}
