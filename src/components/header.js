//import libraries for making a component
import React from "react";
import { Text, View } from "react-native";

// make a component
const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#6881aa"
  },
  textStyle: {
    fontSize: 20
  }
};

// make a component available to other part to the app
export default Header;
