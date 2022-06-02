import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, StatusBar } from "react-native";
import { Text } from "react-native-elements";

import colors from "../config/colors";
import { PrimaryButton } from "../components/Buttons";
import { getScheduleTheory } from "../utils/api/schedule";


export const GroupScheduleTheoryItem = ({ group }) => {
  return <View style={styles.groupScheduleTheoryItem}>
    <Text h4 style={{ fontSize: 26, textAlign: "center", marginBottom: 8 }}>{group.name}</Text>
    {
      group.schedule_theory.length > 0 ?
        group.schedule_theory.map(schedule =>
          <ScheduleTheoryItem key={schedule.id} schedule={schedule} />
        ) : <Text style={{ fontSize: 20, textAlign: "center" }}>Нет занятий</Text>
    }
  </View>
}
export const ScheduleTheoryItem = ({ schedule }) => {
  return <View style={styles.scheduleTheoryItemContainer}>
    <Text style={styles.scheduleTheoryText}>{schedule.weekday}</Text>
    <Text style={styles.scheduleTheoryText}>{schedule.position}</Text>
  </View>
}

export const ScheduleTheoryList = ({ data }) => {
  return <View>
    {data.map(group => <GroupScheduleTheoryItem key={group.id} group={group} />)}
  </View>
}

export const ScheduleTheoryScreen = ({ navigation }) => {
  const onAuthError = async err => {
    console.log(`auth ${err}`)
  }
  const onNetworkError = async err => {
    console.log(`network ${err}`)
  }
  const onSuccess = async data => {
    console.log(`success ${data}`)
    setData(data)
  }

  useEffect(() => {
    setLoading(true)
    getScheduleTheory(onSuccess, onNetworkError, onAuthError, () => setLoading(false))
  }, [])

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  return <ScrollView>
    <View style={styles.mainContainer}>
      {isLoading ?
        <Text>Loading</Text> :
        <ScheduleTheoryList data={data} />}
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: "100%",
    marginTop: 16,
  },
  groupScheduleTheoryItem: {
    margin: 8,
    backgroundColor: colors.light,
    borderRadius: 16,
    paddingVertical: 16,
  },
  scheduleTheoryItemContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: "5%",
  },
  scheduleTheoryText: {
    fontSize: 22,
    color: colors.text
  }
})

export default ScheduleTheoryScreen