import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  StatusBar
} from "react-native";
import { Input } from "react-native-elements";

import colors from "../config/colors";
import Logo from "../components/Logo";
import {
  PrimaryButton,
  SecondaryButton,
} from "../components/buttons";
import { getToken } from "../utils/api/auth";
import { storeApiKey, getApiKey } from "../utils/storage";

export const LoginForm = ({ onChangeLogin, onChangePassword, errorMessage }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.loginContainer}>
      <Input
        placeholder="username"
        label="Имя пользователя"
        leftIcon={{ name: "account-circle", iconStyle: styles.icon }}
        renderErrorMessage={false}
        onChangeText={(login) => {
          if (onChangeLogin !== undefined) onChangeLogin(login);
        }}
      />
      <Input
        placeholder="Password"
        label="Пароль"
        secureTextEntry={passwordVisible ? false : true}
        onChangeText={(pswd) => {
          if (onChangePassword !== undefined) {
            onChangePassword(pswd);
          }
        }}
        renderErrorMessage={true}
        errorMessage={errorMessage}
        errorStyle={{ fontSize: 18, textAlign: "center" }}
        leftIcon={{ name: "lock", iconStyle: styles.icon }}
        rightIcon={{
          name: passwordVisible ? "visibility" : "visibility-off",
          iconStyle: styles.icon,
          onPress: () => {
            setPasswordVisible((prev) => !prev);
          },
        }}
      />
    </View>
  );
};

export default function AuthScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSuccess = token => {
    console.log(`token ${token}`)
    setErrorMessage("")
    storeApiKey(token)
    navigation.navigate("Profile")
  }
  const onNetworkError = error => {
    console.error(`${error}`)
    setErrorMessage("Ошибка подключения к сети")
  }
  const onCredentialsIncorrect = async error => {
    console.warn(error)
    setErrorMessage("Неверный логин или пароль")
  }

  const onLoginBtnPress = async () => {
    getToken(login, password,
      onSuccess,
      onNetworkError,
      onCredentialsIncorrect)
  }
  const onForgotPswdBtnPress = () => {
    alert('Сожалеем :(')
  }

  return <ScrollView style={{ paddingTop: 30 }}>
    <View style={styles.container}>
      <Logo />
      <View style={[styles.itemsContainer]}>
        <LoginForm onChangeLogin={setLogin} onChangePassword={setPassword} errorMessage={errorMessage} />
        <View style={styles.buttonsContainer}>
          <PrimaryButton title="Войти" wide onPress={onLoginBtnPress} />
          <SecondaryButton title="Забыли пароль?" wide
            onPress={onForgotPswdBtnPress} />
        </View>
      </View>
    </View>
  </ScrollView>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: Dimensions.get("window").height - StatusBar.currentHeight,
    padding: "2%",
  },
  loginContainer: {
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
    maxWidth: 400,
    backgroundColor: colors.light,
    marginBottom: 15
  },
  buttonsContainer: {
    width: "100%",
    maxWidth: 400,
  },
  itemsContainer: {
    flex: 1,
    paddingVertical: 60,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0.5,
    width: "100%",
  },
  icon: {
    color: colors.primary,
  },
});
