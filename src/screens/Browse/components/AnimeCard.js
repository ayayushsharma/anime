import babelConfig from "babel.config";
import React, { Component } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { Link, withRouter } from "react-router-native";
import * as Progress from "react-native-progress";

// importing modules form absolute path
import { theme } from "themes/theme.js";

//test data / A template for Typescript interface or type for State
const data = {
	name: "Jojo's Bizzare Adventure",
	date: "23/10/2021 - 23/10/2022",
	totalEpisodes: 25,
	seenEpisodes: 12,
	rating: 6,
	nextEpisode: "Ep12 in 27/9/2012",
};

/**
 * @param {number} seen total episodes seen by the user
 * @param {number} total total episodes in the Anime
 * @returns ratio between them for progress bar
 */
const episodeProgress = (seen, total) => {
	if (seen === null || total === null) return 0;
	if (seen === undefined || total === undefined) return 0;
	if (seen / total > 1) return 1;
	if (seen / total < 0) return 0;
	return seen / total;
};

const ratingBackgroundColor = (rating: Number) => {
	rating = Number(rating);
	if (rating === null || rating === undefined || rating === 0)
		return theme.animeCard.nextEpisode.backgroundColor;
	if (rating >= 10) return theme.animeCard.ratingBackgroundColor.high;
	if (rating >= 5) return theme.animeCard.ratingBackgroundColor.medium;
	if (rating < 5) return theme.animeCard.ratingBackgroundColor.low;
	return theme.animeCard.nextEpisode.backgroundColor;
};

const ratingDisplay = (rating: Number) => {
	if (rating === null) return "none";
	if (rating === undefined) return "none";
	if (rating === 0) return "none";
	return "flex";
};

const nextEpisodeDisplay = data => {
	if (data === null) return "none";
	if (data === undefined) return "none";
	if (data === 0) return "none";
	return "flex";
};

const AnimeCard = ({ name, date, totalEpisodes, seenEpisodes, rating, nextEpisode }) => {
	/**
	 * The Background StyleSheet for manipulating styles of certain elements
	 */
	const background = StyleSheet.create({
		rating: {
			backgroundColor: ratingBackgroundColor(rating),
			display: ratingDisplay(rating),
		},
		nextEpisode: {
			display: nextEpisodeDisplay(nextEpisode),
		},
	});

	return (
		<Link to="/" style={styles.clickableCards} underlayColor={theme.background_dark}>
			{/* Root View. This holds all the data of the card */}
			<View style={styles.horizontalFlex}>
				{/**
				 * This is the Image section. This will carry the cover art of the anime/manga
				 */}
				<View style={styles.coverArtView}>
					<Image source={require("./assets/bg.jpg")} style={styles.coverArt} />
				</View>

				{/**
				 * This is the Left Section of the Card that contains the Deatils about the manga/anime
				 * Contains:
				 *          - Title
				 *          - Date Started Airing - Date It Ended Airing / Present
				 *          - No. of Episodes Seen, Total Number of Episodes ( aired / complete )
				 *          - Rating Given to the particular item by the User
				 *          - Next Episode Airing Date
				 *          - Progress Bar of % of Anime Watched
				 */}
				<View style={styles.detailSection}>
					{/* Title */}
					<Text style={styles.title} numberOfLines={1}>
						{name}
					</Text>

					{/* Air Dates */}
					<Text style={styles.dates} numberOfLines={1}>
						{date}
					</Text>
					<View style={styles.detailsBottomSection}>
						<View style={styles.flexRow}>
							{/* Episode Data */}
							<Text style={styles.episodes}>
								{`${seenEpisodes}/${totalEpisodes}`}
							</Text>
							<View style={[styles.flexRow, styles.marginLeftAuto]}>
								{/* Episode Data */}
								<Text style={[styles.nextEpisode, nextEpisode]}>
									{`${nextEpisode}`}
								</Text>
								{/* Rating Data */}
								<Text adjustsFontSizeToFit style={[styles.rating, background.rating]}>
									{`${rating}⭐`}
								</Text>
							</View>
						</View>

						{/* Progress Bar */}
						<Progress.Bar
							style={styles.progressBar}
							progress={episodeProgress(
								seenEpisodes,
								totalEpisodes,
							)}
							width={null}
						/>
					</View>
				</View>
			</View>
		</Link>
	);
};

/**
 * The Stylesheet component
 */
const styles = StyleSheet.create({
	flexRow: {
		display: "flex",
		flexDirection: "row",
	},
	marginLeftAuto: {
		marginLeft: "auto",
	},
	clickableCards: {
		width: theme.animeCard.cardWidth,
		height: "auto",
		aspectRatio: 2.8,
		marginTop: 5,
		marginBottom: 10,
		marginLeft: "auto",
		marginRight: "auto",
		borderRadius: 10,
		overflow: "hidden",
		backgroundColor: theme.animeCard.background,
		shadowColor: "black",
		elevation: theme.animeCard.elevation,
	},
	horizontalFlex: {
		display: "flex",
		flexDirection: "row",
	},
	coverArtView: {
		height: "100%",
		aspectRatio: 9 / 13,
	},
	coverArt: {
		height: "100%",
		width: "100%",
	},
	detailSection: {
		flex: 1,
		position: "relative",
		padding: 10,
	},
	title: {
		width: "100%",
		color: theme.animeCard.title,
		fontSize: theme.animeCard.headingFontSize,
		letterSpacing: 1.5,
		fontFamily: "Lato Semibold",
	},
	dates: {
		width: "100%",
		color: theme.animeCard.datesColor,
		fontSize: theme.animeCard.headingFontSize / 1.6,
		letterSpacing: 1.5,
		fontFamily: "Lato Semibold",
	},
	detailsBottomSection: {
		position: "relative",
		marginTop: "auto",
	},
	progressBar: {
		marginTop: 10,
	},
	episodes: {
		position: "relative",
		marginTop: "auto",
		color: theme.animeCard.datesColor,
		fontSize: theme.animeCard.headingFontSize / 1.4,
		letterSpacing: 1.5,
		fontFamily: "Lato Semibold",
	},
	rating: {
		position: "relative",
		marginTop: "auto",
		marginBottom: "auto",
		color: theme.animeCard.datesColor,
		fontSize: theme.animeCard.headingFontSize / 1.6,
		letterSpacing: 1.5,
		fontFamily: "Lato Semibold",
		padding: 5,
		borderRadius: 5,
		fontWeight: "700",
	},
	nextEpisode: {
		position: "relative",
		marginTop: "auto",
		marginBottom: "auto",
		color: theme.animeCard.datesColor,
		fontSize: theme.animeCard.headingFontSize / 1.8,
		letterSpacing: 1.5,
		fontFamily: "Lato Semibold",
		padding: 5,
		borderRadius: 5,
		marginRight: 5,
		backgroundColor: theme.animeCard.nextEpisode.backgroundColor,
		fontWeight: "700",
	},
});

export default AnimeCard;
