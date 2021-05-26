import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from "react-native";
import { NativeRouter, Route, Link, Switch } from "react-router-native";

import { theme } from "themes/theme";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
	<TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
		<Text style={styles.appButtonText}>{title}</Text>
	</TouchableOpacity>
);

let alert = () =>
	Alert.alert(
		"Button pressed",
		"If you are fine with it then you should complete the left over work",
	);

const TopBar = ({ title }) => {
	return (
		<View style={styles.TopBar}>
			<AppButton
				title={<FontAwesome5 name="bars" color="white" size={20} />}
				onPress={alert}
			/>
			<Text style={styles.title}>{title}</Text>
			<AppButton
				title={<FontAwesome5 name="search" color="white" size={20} />}
				onPress={alert}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	TopBar: {
		flex: 0.8,
		backgroundColor: theme.TopBar.background,
		flexDirection: "row",
	},
	appButtonContainer: {
		flex: 1,
		backgroundColor: theme.TopBar.background,
		paddingVertical: 10,
		paddingHorizontal: 12,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	appButtonText: {
		fontSize: 18,
		color: theme.TopBar.text.color,
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase",
	},
	title: {
		color: theme.TopBar.text.color,
		flex: 5,
		fontSize: theme.TopBar.text.fontSize,
        textAlignVertical:"center"
	},
});

export default TopBar;
