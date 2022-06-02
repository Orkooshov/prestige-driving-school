import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Button, Avatar } from "react-native-elements";
import { Icon, avatar } from "react-native-elements/dist/icons/Icon";
import { ListItem } from "react-native-elements";

import colors from "../config/colors";
import { PrimaryButton } from "../components/Buttons";
import { getStudent } from "../utils/api/student";
import { clear, removeItem } from "../utils/storage";


export const PersonalDataItem = ({ title, iconName }) => {
  return (
    <ListItem
      // bottomDivider
      containerStyle={styles.itemContainer}
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

function getFullName(user) {
  return `${user.last_name} ${user.first_name} ${user.middle_name}`
}

export const PersonalDataList = ({ student }) => {
  return (
    <View>
      <PersonalDataItem title={getFullName(student.user)} iconName="person" />
      <PersonalDataItem title={student.user.email} iconName="email" />
      <PersonalDataItem title={student.user.phone_number} iconName="call" />
      <PersonalDataItem title={student.group.name} iconName="group" />
      <PersonalDataItem title={getFullName(student.instructor.user)} iconName="support-agent" />
      <PersonalDataItem title={student.license_category} iconName="category" />
    </View>
  );
};

export const Bottom = ({ isLoading, data }) => {
  const onPressEditBtn = () => {
    // navigation.navigate("ProfileEdit")
    console.log('unhandled event')
  }

  return <View style={styles.bottom}>
    {isLoading ?
      <Text>Loading</Text> :
      <PersonalDataList student={data} />
    }
    <PrimaryButton title="Редактировать" onPress={onPressEditBtn}
      buttonStyle={styles.editButton} />
  </View>
}

export const ProfileScreen = ({ navigation }) => {
  const onPressLogoutBtn = () => {
    clear()
    navigation.navigate('Auth')
  }
  const onSuccess = data => {
    setData(data)
    setLoading(false)
  }
  const onError = err => {
    console.log(`error ${err}`)
  }
  useEffect(() => {
    getStudent(onSuccess, onError, onError, () => null)
  }, [])

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  return (
    <ScrollView style={{ paddingTop: 30 }}>
      <Button onPress={onPressLogoutBtn}
        containerStyle={{ position: "absolute", right: 12, top: 24 }}
        buttonStyle={{ backgroundColor: colors.primary, borderRadius: 12 }}
        icon={<Icon name="logout" color={colors.primaryText} size={24} />} />
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>{isLoading ? '' : data.user.username}</Text>
        <Avatar rounded containerStyle={styles.avatarContainer} size={96}
          source={isLoading ? require('../../assets/icon.png') : {uri: data.user.photo }} />
        <Bottom isLoading={isLoading} data={data} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    marginVertical: 16,
    borderColor: colors.primary,
    borderWidth: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 24,
  },
  itemContainer: {
    padding: 24,
    minWidth: 300
  },
  itemText: {
    fontSize: 20,
    marginLeft: 12,
    color: colors.textInactive,
  },
  itemIcon: {
    marginHorizontal: 4,
  },
  bottom: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: colors.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  editButton: {
    alignSelf: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 24,
    width: 200
  }
});

export default ProfileScreen