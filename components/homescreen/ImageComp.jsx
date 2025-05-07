import React, { useEffect, useRef } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
} from "react-native";

const ImageComp = () => {
  // Create a reference for the animation value
  const bounceValue = useRef(new Animated.Value(0)).current;

  // Define the bounce animation
  const bounceAnimation = () => {
    Animated.loop(
      Animated.sequence([
        // Bounce up
        Animated.timing(bounceValue, {
          toValue: -10, // Moves up
          duration: 1500, // Duration for bouncing up
          useNativeDriver: true,
        }),
        // Bounce down
        Animated.timing(bounceValue, {
          toValue: 0, // Moves back down
          duration: 1500, // Duration for bouncing down
          useNativeDriver: true,
        }),
      ])
    ).start(); // Start the animation
  };

  // Start the animation when the component is mounted
  useEffect(() => {
    bounceAnimation();
  }, []);

  return (
    <View contentContainerStyle={styles.scrollContainer}>
      <View style={styles.imageWrapper}>
        {/* Apply animation to the emoji */}
        <Animated.Image
          source={require("../../assets/img/phone.png")}
          style={[styles.image, { transform: [{ translateY: bounceValue }] }]}
        />
        {/* Add the bouncing emoji */}
        <Animated.Text
          style={[
            styles.bouncingEmoji,
            { transform: [{ translateY: bounceValue }] },
          ]}
        >
          📱
        </Animated.Text>
      </View>
      <View style={styles.textWrapper}>
        <View style={styles.row}>
          {"Nuvia".split("").map((char, index) => (
            <Text key={index} style={styles.letter}>
              {char}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
  },
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -60,
  },
  bouncingEmoji: {
    fontSize: 100, // Size of the emoji, adjust as needed
    position: "absolute", // Make it float over the image
    top: "40%", // Adjust position
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  letter: {
    fontSize: 150,
    fontWeight: "bold",
    color: "rgba(255,255,255,0.3)",
    zIndex: -1,
  },
});

export default ImageComp;
