import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Input } from "react-native-elements";
import colors from "../config/colors";
import { PrimaryButton } from "../components/Buttons";
import Logo from "../components/Logo";

export const RegisterForm = ({
  onChangeLastName,
  onChangeName,
  onChangePatronymic,
  onChangeBirthDate,
  onChangeEmail,
  onChangeUsername,
  onChangePassword,
  onChangePassword2,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.loginContainer}>
      <Input
        placeholder="Фамилия"
        renderErrorMessage={false}
        onChangeText={onChangeLastName}
      />
      <Input
        placeholder="Имя"
        renderErrorMessage={false}
        onChangeText={onChangeName}
      />
      <Input
        placeholder="Отчество"
        renderErrorMessage={false}
        onChangeText={onChangePatronymic}
      />
      <Input
        placeholder="Дата рождения"
        renderErrorMessage={false}
        leftIcon={{ name: "calendar-today", iconStyle: styles.icon }}
        onChangeText={onChangeBirthDate}
      />
      <Input
        placeholder="E-mail"
        renderErrorMessage={false}
        leftIcon={{
          name: "alternate-email",
          iconStyle: styles.icon,
        }}
        onChangeText={onChangeEmail}
      />
      <Input
        placeholder="Имя пользователя"
        leftIcon={{ name: "account-circle", iconStyle: styles.icon }}
        renderErrorMessage={false}
        onChangeText={onChangeUsername}
      />
      <Input
        placeholder="Пароль"
        secureTextEntry={passwordVisible ? false : true}
        renderErrorMessage={false}
        leftIcon={{ name: "lock", iconStyle: styles.icon }}
        rightIcon={{
          name: passwordVisible ? "visibility" : "visibility-off",
          iconStyle: styles.icon,
          onPress: () => {
            setPasswordVisible((prev) => !prev);
          },
        }}
        onChangeText={onChangePassword}
      />
      <Input
        placeholder="Пароль (еще раз)"
        secureTextEntry={passwordVisible ? false : true}
        renderErrorMessage={false}
        leftIcon={{ name: "lock", iconStyle: styles.icon }}
        rightIcon={{
          name: passwordVisible ? "visibility" : "visibility-off",
          iconStyle: styles.icon,
          onPress: () => {
            setPasswordVisible((prev) => !prev);
          },
        }}
        onChangeText={onChangePassword2}
      />
    </View>
  );
};

export const RegisterScreen = ({ navigation }) => {
  const onPressRegisterBtn = () => {
    let s = `Имя: ${name}\nФамилия: ${lastName}\nОтчество: ${patronymic}\nДата: ${birthDate}\nПочта: ${email}\nUsername: ${username}\npswd: ${password}\npswd2${password2}`;
    alert(s);
    navigation.navigate("Auth");
  };

  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <ScrollView style={{
      paddingTop: 20
    }}>
      <View style={styles.container}>
        <Logo />
        <RegisterForm
          onChangeName={setName}
          onChangeLastName={setLastName}
          onChangePatronymic={setPatronymic}
          onChangeBirthDate={setBirthDate}
          onChangeEmail={setEmail}
          onChangeUsername={setUsername}
          onChangePassword={setPassword}
          onChangePassword2={setPassword2}
        />
        <PrimaryButton
          title="Зарегистрироваться"
          wide
          onPress={onPressRegisterBtn}
        />
        <Text style={{ marginTop: 40 }}>
          Регистрируясь, вы соглашаетесь что вы дурак!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    padding: "2%",
  },
  loginContainer: {
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
    backgroundColor: colors.light,
    marginVertical: 30,
  },
  itemsContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    flexShrink: 0.5,
    width: "100%",
  },
  icon: {
    color: colors.primary,
  },
});

export default RegisterScreen