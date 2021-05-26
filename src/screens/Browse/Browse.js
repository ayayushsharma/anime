import React, { Component } from "react";
import {
	Button,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	FlatList,
	Text,
	View,
	Image,
	ImageBackground,
	BackHandler,
} from "react-native";
import { Link } from "react-router-native";

// importing modules from absolute path
import { theme } from "themes/theme.js";

// importing modules from Relative Path
import AnimeCard from "./components/AnimeCard";

class Browse extends Component {
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

	data = [
		{
			name: "props.name",
			date: "props.date",
			totalEpisodes: 9,
			seenEpisodes: 5,
			rating: 4,
			nextEpisode: 6,
			id: Math.random(),
			img: `http://unsplash.it/100/150`,
		},
		{
			name: "props.name",
			date: "props.date",
			totalEpisodes: 9,
			seenEpisodes: 5,
			rating: 4,
			nextEpisode: 6,
			id: Math.random(),
			img: `http://unsplash.it/100/160`,
		},
		{
			name: "props.name",
			date: "props.date",
			totalEpisodes: 9,
			seenEpisodes: 5,
			rating: 4,
			nextEpisode: 6,
			id: Math.random(),
			img: `http://unsplash.it/100/150`,
		},
		{
			name: "props.name",
			date: "props.date",
			totalEpisodes: 9,
			seenEpisodes: 5,
			rating: 4,
			nextEpisode: 6,
			id: Math.random(),
			img: `http://unsplash.it/100/150`,
		},
		{
			name: "props.name",
			date: "props.date",
			totalEpisodes: 9,
			seenEpisodes: 5,
			rating: 4,
			nextEpisode: 6,
			id: Math.random(),
			img: `http://unsplash.it/100/150`,
		},
	];

	render() {
		return (
			<View style={this.styles.scrollView}>
				<FlatList
					data={this.data}
					renderItem={({ item }) => (
						<AnimeCard
							name={item.name}
							date={item.date}
							totalEpisodes={item.totalEpisodes}
							seenEpisodes={item.seenEpisodes}
							rating={item.rating}
							nextEpisode={item.nextEpisode}
							img={item.img}
						/>
					)}
					keyExtractor={item => item.id}
				/>
			</View>
		);
	}

	/**
	 * The Stylesheet component
	 */
	styles = StyleSheet.create({
		scrollView: {
			backgroundColor: theme.background_dark,
			paddingTop: 5,
		},
	});
}

export default Browse;
