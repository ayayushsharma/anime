/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

/**----------------------------------------------------------------
 * Importing the Modules
 ----------------------------------------------------------------*/
import Test from "./src/test/Test";

// Welcome Page - The Very First Page When You Open the App for the first time or when you need to relogin.
import Welcome from "./src/screens/Welcome/Welcome";

const App = () => {
	return (
		<NativeRouter>
			<Route exact path="/">
				<Welcome />
			</Route>

			<Route path="/h">
				<Text>Lmah hugiwfiwyfywgfyu</Text>
			</Route>
		</NativeRouter>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: "600",
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: "400",
	},
	highlight: {
		fontSize: 20,
		fontWeight: "700",
		color: "hsl(209, 51%, 32%);",
	},
});

export default App;
