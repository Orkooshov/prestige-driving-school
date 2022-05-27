import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { ListItem, Avatar } from "react-native-elements";

import colors from "../config/colors";
import { PrimaryButton } from "../components/buttons";

const data = {
  surname: "Иванов",
  name: "Иван",
  patronymic: "Иванович",
  username: "username",
  email: "ivanov@ivan.ov",
  birthDate: "1.1.2001",
  role: "Ученик",
  avatarUri:
    "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
};

export const PersonalDataItem = ({ title, iconName }) => {
  return (
    <ListItem
      bottomDivider
      containerStyle={{
        width: "100%",
        padding: 24,
        backgroundColor: colors.background,
      }}
    >
      <Icon name={iconName} color={colors.primary} style={styles.itemIcon} />
      <ListItem.Content>
        <View>
          <Text style={styles.itemText}>{title}</Text>
        </View>
      </ListItem.Content>
    </ListItem>
  );
};

export const PersonalDataList = ({ containerStyle }) => {
  return (
    <View style={[{ width: "100%" }, { ...containerStyle }]}>
      <PersonalDataItem title="Иванов Иван" iconName="person" />
      <PersonalDataItem title="ivanov@ivan.ov" iconName="email" />
      <PersonalDataItem title="1.1.2001" iconName="calendar-today" />
      <PersonalDataItem title="4ИП" iconName="group" />
			<PersonalDataItem title="Иванов Иван" iconName="support-agent" />
			<PersonalDataItem title="Автомат" iconName="inventory" />
    </View>
  );
};

export default function ProfileScreen({ navigation }) {
  const onPressLogoutBtn = () => {
    navigation.goBack();
    navigation.goBack();
  }
  const onPressEditBtn = () => {
    navigation.navigate("ProfileEdit")
  }

  return (
    <ScrollView style={styles.bg}>
      <Button
        containerStyle={{position: "absolute", right: 12, top: 24}}
        buttonStyle={{ backgroundColor: colors.primary, borderRadius: 12 }}
        icon={<Icon name="logout" color={colors.primaryText} size={36} />}
        onPress={ onPressLogoutBtn }
      />
      <View style={styles.container}>
        <Avatar
          source={{ uri: data.avatarUri }}
          rounded
          size={64}
          containerStyle={{ marginTop: 48 }}
        />
        <PersonalDataList />
        <PrimaryButton
          title="Редактировать"
          buttonStyle={{
            paddingVertical: 8,
            paddingHorizontal: 12,
            marginTop: 24,
          }}
          onPress={onPressEditBtn}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 36,
  },
  itemText: {
    fontSize: 20,
    marginLeft: 20,
    color: colors.textInactive,
  },
  itemIcon: {
    marginHorizontal: 12,
  },
  personalDataContainer: {
    // borderRadius: 8,
    width: "100%",
    // backgroundColor: "yellow",
    marginVertical: 30,
    padding: 20,
  },
});
