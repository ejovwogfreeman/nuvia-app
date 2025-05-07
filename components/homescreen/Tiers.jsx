import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Use expo's LinearGradient

const Tiers = () => {
  return (
    <LinearGradient
      colors={["#C34644", "#590D0F"]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }} // Start from the left
      end={{ x: 1, y: 0 }} // End at the right
      locations={[0, 1]}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* BASIC TIER Section */}
        <View style={styles.tierSection}>
          <Text style={styles.tierTitle}>🏅 BASIC TIER</Text>
          <Text style={[styles.accessText, { textAlign: "center" }]}>
            Access Fee: N7,500 (Valid for 5 months)
          </Text>
          <Text style={styles.tierText}>✅ Online streaming access only</Text>
          <Text style={styles.tierText}>⚠️ Limited earning potential</Text>
          <Text style={styles.tierText}>⚠️ Limited streaming revenue</Text>
          <Text style={styles.tierText}>❌ No offline streaming access</Text>
          <Text style={styles.tierText}>
            📅 Subscription expires after 5 months
          </Text>
          <Text style={styles.tierText}>💰 Mode of Entry: N-Coin</Text>
        </View>

        {/* PREMIUM TIER Section */}
        <View style={styles.tierSection}>
          <Text style={styles.tierTitle}>🏅 PREMIUM TIER</Text>
          <Text style={[styles.accessText, { textAlign: "center" }]}>
            Access Fee: N12,500 (Valid for 12 months)
          </Text>
          <Text style={styles.tierText}>
            ✅ Online and offline streaming access
          </Text>
          <Text style={styles.tierText}>⚠️ Unlimited earning potential</Text>
          <Text style={styles.tierText}>⚠️ Unlimited streaming revenue</Text>
          <Text style={styles.tierText}>
            📅 Subscription expires after 12 months
          </Text>
          <Text style={styles.tierText}>💰 Mode of Entry: N-Coin</Text>
        </View>

        {/* Tiers Containers */}
        <View
          style={{
            flex: 1,
            justifyContent: "center", // Vertically center
            alignItems: "center", // Horizontally center
            paddingTop: 20,
          }}
        >
          <Image source={require("../../assets/img/ribbon.png")} />
        </View>

        {/* Basic Tier Details */}
        <LinearGradient
          colors={["#F90001", "#590D0F"]} // Red and Black gradient
          style={styles.tierSection2}
          start={{ x: 0, y: 0 }} // Start from the left
          end={{ x: 1, y: 0 }} // End at the right
        >
          <Text style={styles.tierTitle}>Basic Tier</Text>
          <Text style={styles.tierText}>Only online streaming access</Text>
          <Text style={styles.tierText}>Access fee:</Text>
          <Text style={styles.accessText}>N7,500 / 5 months</Text>
          <View style={styles.line} />
          <Text style={styles.tierText2}>⚪Limited earning potential</Text>
          <Text style={styles.tierText2}>⚪Offline streaming not granted</Text>
          <Text style={styles.tierText2}>
            ⚪Subscription expires after 5 months
          </Text>
          <Text style={styles.tierText2}>⚪Limited streaming revenue</Text>
          <View style={styles.lineTop} />
          <Text style={styles.tierText}>Mode of entry:</Text>
          <Text style={styles.accessText2}>N-Coin</Text>
        </LinearGradient>

        {/* Premium Tier Details */}
        <LinearGradient
          colors={["#BA6F1F", "#000000"]} // Yellow and Black gradient
          style={styles.tierSection2}
          start={{ x: 0, y: 0 }} // Start from the left
          end={{ x: 1, y: 0 }} // End at the right
        >
          <Text style={styles.tierTitle}>Premium Tier</Text>
          <Text style={styles.tierText}>
            Online and offline streaming access
          </Text>
          <Text style={styles.tierText}>Access fee:</Text>
          <Text style={styles.accessText}>N12,500 / 12 months</Text>
          <View style={styles.line} />
          <Text style={styles.tierText2}>⚪Unlimited earning potential</Text>
          <Text style={styles.tierText2}>⚪Unlimited streaming revenue</Text>
          <Text style={styles.tierText2}>
            ⚪Subscription expires after 12 months
          </Text>
          <Text style={styles.tierText2}>⚪Unlimited streaming revenues</Text>
          <View style={styles.lineTop} />
          <Text style={styles.tierText}>Mode of entry:</Text>
          <Text style={styles.accessText2}>N-Coin</Text>
        </LinearGradient>
        <View
          style={{
            flex: 1,
            justifyContent: "center", // Vertically center
            alignItems: "center", // Horizontally center
            padding: 20,
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL("https://t.me/m/O6un8m3BZGE0")}
          >
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  tierSection: {
    backgroundColor: "rgba(256,256,256,0.1)",
    padding: 20,
    paddingTop: 50,
    paddingBottom: 50,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    alignItems: "center",
    width: "100%",
  },
  tierTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 18,
    color: "#FACA16",
  },
  accessText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 14,
    color: "#FACA16",
  },
  tierText: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
  },
  tierSection2: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 50,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1, // Add border width
    borderColor: "#FACA16", // Gold border color (Yellow)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    alignItems: "center",
    width: "100%",
    zIndex: 1, // Ensure it stays above other elements
  },
  tierText2: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
    textAlign: "left",
    width: "100%",
  },
  accessText2: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 14,
    color: "#fff",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#FACA16", // Yellow line color
    marginVertical: 10,
    width: "100%",
    zIndex: 0, // Ensure it's below the text
  },
  lineTop: {
    borderTopWidth: 1,
    borderTopColor: "#FACA16", // Yellow line color
    marginVertical: 10,
    width: "100%",
    zIndex: 0, // Ensure it's below the text
  },
  button: {
    backgroundColor: "#FACA16", // Yellow color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5, // Rounded corners
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000", // Text color black
  },
});

export default Tiers;
