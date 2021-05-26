import React, { Component } from "react";
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	SwitchIOS,
	Text,
	View,
} from "react-native";
import { NativeRouter, Route, Link, Switch } from "react-router-native";

/**----------------------------------------------------------------
 * Importing the Screen Components
 ----------------------------------------------------------------*/
import BottomNav from "./src/components/BottomNav";
import TopBar from "./src/components/TopBar";

/**----------------------------------------------------------------
 * Importing the Screens
 ----------------------------------------------------------------*/
// Welcome Page - The Very First Page When You Open the App for the first time or when you need to relogin.
import Welcome from "./src/screens/Welcome/Welcome";
import Browse from "./src/screens/Browse/Browse";

// importing theme
import { theme } from "themes/theme";

class App extends Component {
	render() {
		return (
			<NativeRouter>
				<Switch>
					<Route exact path="/">
						<Welcome />
					</Route>

					<Route>
						<StatusBar animated={true} backgroundColor={theme.TopBar.background} />
						<TopBar title={`Broswe`}/>
						<View style={styles.screens}>
							<Switch>
								<Route exact path="/Browse">
									<Browse />
								</Route>

								<Route path="/h">
									<Link to="/Browse">
										<Text>Login / Sign Up</Text>
									</Link>
								</Route>
							</Switch>
						</View>
						<BottomNav />
					</Route>
				</Switch>
			</NativeRouter>
		);
	}
}

const styles = StyleSheet.create({
	screens: {
		flex: 11,
	},
});

export default App;
