import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, StatusBar } from "react-native";
import { Text } from "react-native-elements";

import colors from "../config/colors";
import { PrimaryButton } from "../components/Buttons";
import { getSchedulePractice } from "../utils/api/schedule";


export const SchedulePracticeItem = ({ schedule }) => {
  return <View style={styles.SchedulePracticeItemContainer}>
    <Text style={{ fontSize: 20 }}>{schedule.weekday}</Text>
    <Text style={{ fontSize: 20 }}>{schedule.position}</Text>
  </View>
}

export const SchedulePracticeList = ({ data }) => {
  return <View>
    {data.schedule_practice.map(schedule =>
      <SchedulePracticeItem key={schedule.id} schedule={schedule} />
    )}
  </View>
}

export const SchedulePracticeScreen = ({ navigation }) => {
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
    // on first render
    setLoading(true)
    getSchedulePractice(onSuccess, onNetworkError, onAuthError, () => setLoading(false))
  }, [])

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  return <ScrollView>
    <View style={styles.mainContainer}>
      {isLoading ?
        <Text>Loading</Text> :
        <SchedulePracticeList data={data} />
      }
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: "100%",
    marginTop: 16,
  },
  SchedulePracticeItemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    marginVertical: 4,
    padding: 16,
    borderRadius: 16,
    backgroundColor: colors.light
  }
})

export default SchedulePracticeScreen