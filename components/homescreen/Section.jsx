import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const { width } = Dimensions.get("window");

const GradientText = ({ children }) => (
  <MaskedView maskElement={<Text style={styles.headerText}>{children}</Text>}>
    <LinearGradient
      colors={["#F9FDCA", "#FD8156"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={[styles.headerText, { opacity: 0 }]}>{children}</Text>
    </LinearGradient>
  </MaskedView>
);

const Section = () => {
  return (
    <ImageBackground
      source={require("../../assets/img/background.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["#C34644", "#590D0F"]}
        style={styles.circle}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      <View style={styles.textWrapper}>
        <GradientText>
          The Music Streaming Apps You Overlook That Can Make You Millions
        </GradientText>
        <Text style={styles.whiteText}>on Nuvia</Text>
      </View>

      <View style={styles.imageGrid}>
        <Image
          source={require("../../assets/img/spotify.png")}
          style={styles.gridImage}
        />
        <Image
          source={require("../../assets/img/boomplay.png")}
          style={styles.gridImage}
        />
        <Image
          source={require("../../assets/img/apple.png")}
          style={styles.gridImage}
        />
        <Image
          source={require("../../assets/img/soundcloud.png")}
          style={styles.gridImage}
        />
        <Image
          source={require("../../assets/img/audiomack.png")}
          style={styles.gridImage}
        />
        <Image
          source={require("../../assets/img/youtubemusic.png")}
          style={styles.gridImage}
        />
      </View>

      {/* Center Coin */}
      <Image
        source={require("../../assets/img/coin.png")}
        style={styles.centerCoin}
      />

      {/* Diagonal Background Container */}
      <View style={styles.diagonalBackgroundContainer}>
        <Image
          source={require("../../assets/img/backgroundbg.png")}
          style={styles.backgroundImg}
        />
      </View>

      {/* Coins beside phone */}
      <View style={styles.phoneSection}>
        <Image
          source={require("../../assets/img/coins.png")}
          style={styles.coinsBesidePhone}
        />
        <Image
          source={require("../../assets/img/phoneph.png")}
          style={styles.phoneImage}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 550,
    overflow: "hidden",
    position: "relative",
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "transparent", // Ensure background is transparent
    marginTop: -50,
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 150,
    position: "absolute",
    top: -150,
    right: -150, // fully off screen to remove dark edge
  },
  textWrapper: {
    alignItems: "flex-start",
    marginBottom: 10,
    flexDirection: "row", // Keep text and "on Nuvia" on the same line
    flexWrap: "wrap", // Allow wrapping if text is long
    marginBottom: 15, // space for text
  },
  headerText: {
    fontSize: 21, // Increased font size for consistency
    fontWeight: "bold",
    textAlign: "left",
    color: "#FFF",
  },
  whiteText: {
    fontSize: 21, // Same font size as the header text
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "left",
    marginLeft: 0, // Space between header text and "on Nuvia"
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 0,
    maxWidth: 250,
    marginTop: 10,
    marginLeft: -20,
  },
  gridImage: {
    width: 100,
    height: 50,
    margin: 5,
    resizeMode: "contain",
  },
  phoneSection: {
    position: "absolute",
    right: 0,
    bottom: 0, // Fine-tuned for correct positioning
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },
  phoneImage: {
    width: 150,
    height: 300,
    resizeMode: "contain",
    marginBottom: -30,
  },
  coinsBesidePhone: {
    width: 150,
    height: 300,
    resizeMode: "contain",
    marginBottom: -50,
  },
  centerCoin: {
    position: "absolute",
    top: -30, // Slightly raised
    alignSelf: "center",
    width: 50, // Increased size
    height: 130, // Increased size
    resizeMode: "contain",
  },

  // Diagonal Background Container Styling
  diagonalBackgroundContainer: {
    position: "absolute",
    bottom: -120,
    left: 0,
    width: 500,
    backgroundColor: "transparent", // Ensure transparency to show the background image
    overflow: "hidden",
    transform: [{ rotate: "-15deg" }],
    backgroundColor: "red",
  },

  backgroundImg: {
    width: "100%",
    height: 250,
  },
});

export default Section;
