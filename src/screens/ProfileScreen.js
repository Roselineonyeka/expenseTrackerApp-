import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/headerbgimg.png")}
        style={styles.topSection}
        resizeMode="cover"
      >
        <View style={styles.Header}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/goBackArrow_white.png")}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/notificationball.png")}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.card}>
        <TouchableOpacity>
          <Image source={require("../../assets/images/profileimg.png")} />
        </TouchableOpacity>
      </View>
      <Text style={styles.username}>Roseline Morgeana</Text>
      <Text style={styles.emailAddress}>@enjelin_morgeana</Text>

      <View style={styles.Sections_container}>
        <View style={styles.Sections_diamond}>
          <Image source={require("../../assets/images/daimondicon.png")} />
          <Text style={styles.labels}>Invite Friends</Text>
        </View>
        {/* <View style={styles.divider} /> */}

        <View style={styles.Sections}>
          <Image source={require("../../assets/images/usericon_gray.png")} />
          <Text style={styles.labels}>Account info</Text>
        </View>
        <View style={styles.Sections}>
          <Image source={require("../../assets/images/usericon_gray_2.png")} />
          <Text style={styles.labels}>Personal profile</Text>
        </View>
        <View style={styles.Sections}>
          <Image source={require("../../assets/images/messageicon.png")} />
          <Text style={styles.labels}>Message center</Text>
        </View>
        <View style={styles.Sections}>
          <Image source={require("../../assets/images/securityicon.png")} />
          <Text style={styles.labels}>Login and security</Text>
        </View>
        <View style={styles.Sections}>
          <Image source={require("../../assets/images/privacykeyicon.png")} />
          <Text style={styles.labels}>Data and privacy</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },

  topSection: {
    justifyContent: "flex-start",
    width: "100%",
    height: 260,
    paddingTop: 60,
    alignItems: "flex-start",
  },

  Header: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 18,
  },

  card: {
    position: "absolute",
    top: 140,
    left: 25,
    right: 25,
    width: "90%",
    borderRadius: 20,
    minHeight: 180,
    padding: 15,
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  username: {
    fontSize: 20,
    // marginTop: 25,
    paddingTop: 25,
    textAlign: "center",
    fontWeight: "600",
    color: "#222222",
  },
  emailAddress: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
    color: "#438883",
  },

  Sections_container: {
    alignItems: "center",
    width: "100%",
    gap: 10,
    paddingTop: 10,
  },

  Sections_diamond: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "#EEEEEE",
  },

  Sections: {
    width: "100%",
    paddingHorizontal: 35,
    paddingTop: 20,
    flexDirection: "row",
    gap: 25,
    alignItems: "center",
  },
  //   divider: {
  //     width: "100%",
  //     height: 1,
  //     backgroundColor: "#EEEEEE",
  //     marginHorizontal: 15,
  //   },
  labels: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
    color: "#222222",
  },
});
