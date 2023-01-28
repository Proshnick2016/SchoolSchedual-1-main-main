import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import homePageStyles from "../styles/homePageStyles";

export default function HomePage() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const logInAndGetSchedual = async () => {
        await axios.post('http://localhost:8001/userLogIn', { login, password })
            .then(function (response) {
                // Создание cookie для логина и пароля, создание localStorage записи для расписания
                Cookies.set("login", login);
                Cookies.set("password", password);
                localStorage.setItem('Schedual', JSON.stringify(response.data));

            })
            .catch(function (error) { // если получили ошибку
                console.log(error);
            });
    };

    return (
        <View style={homePageStyles.container}>

            <View style={homePageStyles.inputView}>
                <TextInput
                    style={homePageStyles.TextInput}
                    placeholder="Логин "
                    placeholderTextColor="#003f5c"
                    onChangeText={(login) => setLogin(login)}
                />
            </View>

            <View style={homePageStyles.inputView}>
                <TextInput
                    style={homePageStyles.TextInput}
                    placeholder="Пароль"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={homePageStyles.loginBtn} onPress={logInAndGetSchedual}>
                <Text style={homePageStyles.loginText}>LOGIN</Text>
            </TouchableOpacity>

        </View>
    );
}
