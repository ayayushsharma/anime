import React, { Component } from "react";
import {
	Button,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground,
    BackHandler
} from "react-native";
import { Link } from "react-router-native";

// importing modules form absolute path
import { theme } from "themes/theme.js";
const appDetails = require("root/app.json");

class Welcome extends Component {
	state = {
		hasLoggedIn: false,
	};

	// componentWillMount() {
	// 	BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
	// }

	// componentWillUnmount() {
	// 	BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
	// }

	// handleBackButton = () => {
	// 	this.props.navigation.goBack();
	// 	return true;
	// };

	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar animated={true} backgroundColor="#000000" />
				{/* <View style={{ flex: 1, backgroundColor: "powderblue" }} />
				<View style={{ flex: 2, backgroundColor: "skyblue" }} /> */}
				<View style={this.styles.topView}>
					<Image
						source={require("./assets/bg.jpg")}
						style={{ width: "100%", height: "100%" }}
					/>
					<View style={this.styles.overlay}>
						<Text style={this.styles.overlayText}>{appDetails.name}</Text>
					</View>
				</View>
				<View style={this.styles.bottomView}>
					<Text style={this.styles.text}>
						Login with <Text style={this.styles.highlight}>MyAnimeList</Text>
					</Text>
					<Link to="/Browse" style={this.styles.loginbutton}>
						<Text style={this.styles.buttontext}>Login / Sign Up</Text>
					</Link>
					<Link to={"/h"} style={this.styles.nologinbutton}>
						<Text style={this.styles.buttontext}>Skip Login</Text>
					</Link>
					<Text style={this.styles.text}>
						If Login doesn't work,
						<Text style={this.styles.highlight}> skip Login</Text>
					</Text>
				</View>
			</View>
		);
	}

	/**
	 * The Stylesheet component
	 */
	styles = StyleSheet.create({
		// To make the root div fullscreen
		fullscreen: {
			flex: 1,
		},

		// bottom part of the screen that hold all the buttons and initial guiding text
		bottomView: {
			flex: 2,
			backgroundColor: theme.background_dark,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},

		// The View that holds the top image or possibly a carousel in the future updates
		topView: {
			position: "relative",
			flex: 5,
			backgroundColor: "powderblue",
		},
		overlay: {
			position: "absolute",
			backgroundColor: "#0007",
			height: "100%",
			width: "100%",
		},
		overlayText: {
			display: "flex",
			textAlign: "center",
			marginTop: "60%",
			color: "white",
			fontSize: 45,
			fontWeight: "500",
			fontFamily: "Lato Semibold",
			textShadowColor: "black",
			textShadowOffset: {
				width: 2,
				height: 2,
			},
			textShadowRadius: 10,
			letterSpacing: 5,
		},

		// Separate Styling for the buttons
		loginbutton: {
			backgroundColor: theme.background_dark,
			paddingTop: 10,
			paddingBottom: 10,
			borderRadius: 8,
			width: "80%",
			borderWidth: 4,
			borderColor: theme.background,
			marginTop: 14,
			marginBottom: 8,
		},
		nologinbutton: {
			backgroundColor: theme.background,
			paddingTop: 10,
			paddingBottom: 10,
			borderRadius: 8,
			width: "80%",
			borderWidth: 4,
			borderColor: theme.background,
			marginTop: 14,
			marginBottom: 8,
		},
		buttontext: {
			fontSize: 20,
			fontWeight: "700",
			color: "white",
			textAlign: "center",
		},

		// The instructions for which buttons to choose
		text: {
			fontSize: 16,
			fontWeight: "400",
			color: "#ffffffa0",
		},
		highlight: {
			color: "white",
		},
	});
}

export default Welcome;
