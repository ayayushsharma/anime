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
} from "react-native";
import { Link } from "@react-navigation/native";

// importing modules form absolute path
import { theme } from "themes/theme.js";
import Test from "src/test/Test";

class Welcome extends Component {
	state = {};

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
						<Text style={this.styles.overlayText}>Anime</Text>
					</View>
				</View>
				<View style={this.styles.bottomView}>
					<Text style={this.styles.text}>
						Login with <Text style={this.styles.highlight}>MyAnimeList</Text>
					</Text>
					<Link to="/h" style={this.styles.login}>
						Login / Sign Up
					</Link>
					<Link to="/h" style={this.styles.nologin}>
						Skip Login
					</Link>
					<Text style={this.styles.text}>
						If Login doesn't work,
                        <Text style={this.styles.highlight}> skip Login</Text>
					</Text>
				</View>
			</View>
		);
	}

	styles = StyleSheet.create({
		fullscreen: {
			flex: 1,
		},
		bottomView: {
			flex: 2,
			backgroundColor: theme.background_dark,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		topView: {
			position: "relative",
			flex: 5,
			backgroundColor: "powderblue",
			// borderBottomColor: "white",
			// borderBottomWidth: 2,
		},
		login: {
			fontSize: 20,
			fontWeight: "700",
			color: "white",
			backgroundColor: theme.background_dark,
			paddingTop: 10,
			paddingBottom: 10,
			borderRadius: 8,
			width: "80%",
			textAlign: "center",
			borderWidth: 4,
			borderColor: theme.background,
			marginTop: 14,
			marginBottom: 8,
		},
		nologin: {
			fontSize: 20,
			fontWeight: "700",
			color: "white",
			backgroundColor: theme.background,
			paddingTop: 10,
			paddingBottom: 10,
			borderRadius: 8,
			width: "80%",
			textAlign: "center",
			borderWidth: 4,
			borderColor: theme.background,
			marginTop: 14,
			marginBottom: 8,
		},
		text: {
			fontSize: 16,
			fontWeight: "400",
			color: "#ffffffa0",
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
		highlight: {
			color: "white",
		},
	});
}

export default Welcome;
