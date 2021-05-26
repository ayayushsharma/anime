import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link, Switch } from "react-router-native";

import { theme } from "themes/theme";

import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/FontAwesome";

const BottomNav = () => {
	return (
		<View style={styles.BottomNav}>
			<View style={styles.navLinkParentView}>
				<Link to="/Home" style={styles.navLinks} underlayColor={theme.background_light}>
					<View style={styles.center}>
						<Foundation
							name="home"
							size={30}
							color={theme.BottomNav.text.color}
							style={styles.icons}
						/>
						<Text style={styles.text}>Home</Text>
					</View>
				</Link>
			</View>
			<View style={styles.navLinkParentView}>
				<Link to="/Browse" style={styles.navLinks} underlayColor={theme.background_light}>
					<View style={styles.center}>
						<MaterialIcons
							name="explore"
							size={30}
							color={theme.BottomNav.text.color}
							style={styles.icons}
						/>
						<Text style={styles.text}>Browse</Text>
					</View>
				</Link>
			</View>
			<View style={styles.navLinkParentView}>
				<Link to="/Home" style={styles.navLinks} underlayColor={theme.background_light}>
					<View style={styles.center}>
						<MaterialIcons
							name="calendar-today"
							size={30}
							color={theme.BottomNav.text.color}
							style={styles.icons}
						/>
						<Text style={styles.text}>Calender</Text>
					</View>
				</Link>
			</View>
			<View style={styles.navLinkParentView}>
				<Link to="/stats" style={styles.navLinks} underlayColor={theme.background_light}>
					<View style={styles.center}>
						<MaterialIcons
							name="bar-chart"
							size={30}
							color={theme.BottomNav.text.color}
							style={styles.icons}
						/>
						<Text style={styles.text}>Stats</Text>
					</View>
				</Link>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	BottomNav: {
		flex: 1,
		backgroundColor: theme.BottomNav.background,
		flexDirection: "row",
	},
	navLinkParentView: {
		flex: 1,
		position: "relative",
	},
	navLinks: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: theme.BottomNav.text.color,
		fontSize: theme.BottomNav.text.fontSize,
	},
	center: {
		display: "flex",
		alignItems: "center",
	},
    icons: {
        marginBottom: 2
    }
});

export default BottomNav;
