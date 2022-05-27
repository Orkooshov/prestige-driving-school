import React from "react";
import { Text } from "react-native-elements";
import { ScrollView, StyleSheet, View } from "react-native";
import colors from "../config/colors";

const data = {
	theory: [
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
	],
	practice: [
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
		{ date: "2020-02-02", mark: 5 },
	],
};

const renderRow = (first, second) => {
	return (
		<>
			<View
				style={{
					flex: 1,
					width: "100%",
					height: "100%",
					alignItems: "center",
					flexDirection: "row",
				}}
			>
				<View style={{ flex: 2, alignItems: "center" }}>
					<Text h6>{first}</Text>
				</View>
				<View style={{ flex: 2, alignItems: "center" }}>
					<Text h6>{second}</Text>
				</View>
			</View>
		</>
	);
};

export default function MarksScreen() {
	return (
		<ScrollView style={{backgroundColor: colors.background}}>
			<View style={styles.container}>
				<Text h1>Оценки</Text>
				<Text h3>Теория</Text>
				<View style={{ flex: 1, flexDirection: "column", borderWidth: 1 }}>
					{data.theory.map((datum) => renderRow(datum.date, datum.mark))}
				</View>
				<Text h3>Практика</Text>
				<View style={{ flex: 1, flexDirection: "column", borderWidth: 1 }}>
					{data.practice.map((datum) => renderRow(datum.date, datum.mark))}
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
});
