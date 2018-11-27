import React from "react";
import { Text, View, StyleSheet, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

const AlbumDetail = ({ album }) => {
  const { title, artist, image, url } = album;
  const {
    thumbnailStyle,
    headerContent,
    thumbnailContainer,
    headerTextStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image
            resizeMode={"stretch"} // untuk mereplace foto agar sesuai sama yang di atas nya
            style={thumbnailStyle}
            source={{ uri: image }}
          />
        </View>
        <View style={headerContent}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} Buy Now />
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
