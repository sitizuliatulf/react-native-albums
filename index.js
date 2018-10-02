//import a library to help create component
import React from "react";
import { AppRegistry } from "react-native";
import Header from "./src/components/header";

// create a component

const App = props => <Header />;

// render it to the device
AppRegistry.registerComponent("albums", () => App);
