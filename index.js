//import a library to help create component
import React from "react";
import { AppRegistry, View, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumsList";

// create a component

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcfdff",
    flex: 1
  }
});

const App = props => (
  <View style={styles.container}>
    <Header headerText={"Albums"} />
    <AlbumList />
  </View>
);

// render it to the device
AppRegistry.registerComponent("albums", () => App);
