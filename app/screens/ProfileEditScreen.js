import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Avatar } from "react-native-elements";
import PrimaryButton from "../components/buttons";

import colors from "../config/colors";

export function ProfileEditForm() {
  return (
    <View style={styles.profileEditContainer}>
      <Input placeholder="Фамилия" renderErrorMessage={false} />
      <Input placeholder="Имя" renderErrorMessage={false} />
      <Input placeholder="Отчество" renderErrorMessage={false} />
      <Input
        placeholder="Дата рождения"
        renderErrorMessage={false}
        leftIcon={{ name: "calendar-today", iconStyle: styles.icon }}
      />
      <Input
        placeholder="E-mail"
        renderErrorMessage={false}
        leftIcon={{
          name: "alternate-email",
          iconStyle: styles.icon,
        }}
      />
      <PrimaryButton title="Редактировать" containerStyle={{marginTop: 20, marginHorizontal: 30}}/>
    </View>
  );
}

export default function ProfileEditScreen() {
  return (
    <View style={styles.container}>
      <Avatar size={96} containerStyle={{alignSelf: "center", marginVertical: 40}} rounded source={{uri: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"}} />
      <ProfileEditForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: "column",
    alignItems: "stretch"
  },
  profileEditContainer: {
    backgroundColor: colors.light,
    borderColor: colors.primary,
    marginHorizontal: 8,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderWidth: 1,
    height: 400
  },
  icon: {
    color: colors.primary,
  },
});
