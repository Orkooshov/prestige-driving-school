import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const ScheduleItem = ({ weekday, subject }) => (
	<View
		style={{
			backgroundColor: "#ddd",
			paddingHorizontal: 16,
			paddingVertical: 8,
			marginVertical: 4,
			borderRadius: 10,
			borderWidth: 1,
		}}
	>
		<Text h4 style={{ textAlign: "center", marginBottom: 8 }}>
			{weekday}
		</Text>
		<Text style={{ fontSize: 20 }}>{subject}</Text>
	</View>
);

export default function ScheduleScreen() {
	return (
		<View>
			<Text h1 style={{ textAlign: "center" }}>
				Расписание
			</Text>
			<View style={{ padding: "3%" }}>
				<ScheduleItem weekday="Понедельник" subject="Теория" />
				<ScheduleItem weekday="Вторник" subject="Практика" />
				<ScheduleItem weekday="Среда" subject="Теория" />
				<ScheduleItem weekday="Четверг" subject="Практика" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});
