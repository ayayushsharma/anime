module.exports = {
	presets: ["module:metro-react-native-babel-preset"],
	plugins: [
		[
			"module-resolver",
			{
				root: ["."],
				alias: {
					"~": "./src",
					"themes": "./src/themes",
					"@scripts": "./src/scripts",
					"@assets": "./assets",
					"@Browse": "./src/screens/Browse",
					"@Home": "./src/screens/Home",
					"@Stats": "./src/screens/Stats",
				},
			},
		],
	],
};
