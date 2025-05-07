import { Background } from "@react-navigation/elements";
import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";

const Navbar = () => {
  return (
    <SafeAreaView>
      <View style={navStyle}>
        <Image source={require("../../assets/img/logo.png")} />
        <Image source={require("../../assets/img/logolg.png")} />
      </View>
    </SafeAreaView>
  );
};

const navStyle = StyleSheet.create({
  flex: 1,
  paddingTop: 30, // Adds padding to the top
  paddingBottom: 30, // Adds padding to the bottom
  paddingLeft: 20,
  paddingRight: 20,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export default Navbar;
