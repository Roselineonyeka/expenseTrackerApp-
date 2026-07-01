import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  // TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top Section */}

      <View style={styles.topSection}>
        <ImageBackground
          source={require("../../assets/images/expoonboardingbg.png")}
          style={styles.backgroundimg}
          resizeMode="cover"
        >
          <Image
            source={require("../../assets/images/expoonboardingimg.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </ImageBackground>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.title}>spend smarter save more</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Main")}
          style={styles.buttonTouch}
        >
          <LinearGradient
            colors={["#69AEA9", "#3F8782"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Login</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  topSection: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundimg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  image: {
    width: 280,
    height: 380,
    paddingTop: 70,
    // backgroundColor: 'red',
  },

  bottomSection: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: 'blue',
    paddingHorizontal: 50,
    paddingTop: 40,
  },

  title: {
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    color: "#438883",
    marginBottom: 28,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },
  buttonTouch: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    // backgroundColor: '#69AEA9',
    paddingVertical: 16,
    width: "100%",
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 14,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  loginText: {
    color: "#666",
    fontSize: 14,
  },

  loginLink: {
    color: "#438883",
    fontWeight: "600",
  },
});
