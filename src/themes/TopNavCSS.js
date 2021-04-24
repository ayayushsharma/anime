/**
 * This is a common //CSS// for the app that can be directly 
 * imported in the other files
 */
const themes = require("@themes/theme");
const TopNavCSS = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24, 
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default TopNavCSS;