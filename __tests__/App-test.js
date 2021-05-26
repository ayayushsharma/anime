/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

//importing various componenets for testing
import Browse from "../src/screens/Browse/Browse";
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it("App Renders", () => {
	renderer.create(<App />);
});

it("Browse Rendered", () => {
	renderer.create(<Browse />);
});
