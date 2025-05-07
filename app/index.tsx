import { Image } from "expo-image";
import { Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import Header from "../components/homescreen/Header";
import Section from "../components/homescreen/Section";
import Tiers from "../components/homescreen/Tiers";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Section />
        <Tiers />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
