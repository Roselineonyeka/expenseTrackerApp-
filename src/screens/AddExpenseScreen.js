import React, { useState } from "react";
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
import WalletListItem from "../../components/WalletListItem";
export default function WalletScreen() {
  const [selectedTab, setSelectedTab] = useState("Transactions");

  const transactions = [
    {
      id: 1,
      title: "Upwork",
      date: "Today",
      amount: "+ $850.00",
      icon: require("../../assets/images/upworkimg.png"),
      type: "credit",
    },
    {
      id: 2,
      title: "Transfer",
      date: "Yesterday",
      amount: "- $85.00",
      icon: require("../../assets/images/humanimg_female.png"),
      type: "debit",
    },
    {
      id: 3,
      title: "Youtube",
      date: "Jan 16, 2022",
      amount: "- $11.99",
      icon: require("../../assets/images/youtubeimg.png"),
      type: "debit",
    },
  ];

  const upcomingBills = [
    {
      id: 1,
      title: "Spotify",
      date: "Feb 28, 2022",
      icon: require("../../assets/images/spotifyimg.png"),
      type: "bill",
    },
    {
      id: 2,
      title: "YouTube",
      date: "Mar 05, 2022",
      icon: require("../../assets/images/youtubeimg.png"),
      type: "bill",
    },
    {
      id: 3,
      title: "Adobe",
      date: "Mar 12, 2022",
      icon: require("../../assets/images/electricityicon.png"),
      type: "bill",
    },
  ];

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

          <Text style={styles.title}>Wallet</Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/notificationball.png")}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.card}>
        <Text style={styles.totalBal}>Total Balance</Text>
        <Text style={styles.amount}>$ 2,548.00</Text>
        <View style={styles.btnView}>
          <TouchableOpacity>
            <Image source={require("../../assets/images/addicon.png")} />
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../../assets/images/payicon.png")} />
            <Text style={styles.btnText}>Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../../assets/images/sendicon.png")} />
            <Text style={styles.btnText}>Send</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === "Transactions" && styles.activeTab,
            ]}
            onPress={() => setSelectedTab("Transactions")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "Transactions" && styles.activeTabText,
              ]}
            >
              Transactions
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === "Upcoming Bills" && styles.activeTab,
            ]}
            onPress={() => setSelectedTab("Upcoming Bills")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "Upcoming Bills" && styles.activeTabText,
              ]}
            >
              Upcoming Bills
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          {(selectedTab === "Transactions" ? transactions : upcomingBills).map(
            (item) => (
              <WalletListItem
                key={item.id}
                title={item.title}
                date={item.date}
                amount={item.amount}
                icon={item.icon}
                type={item.type}
              />
            ),
          )}
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
    top: 160,
    // left: 25,
    // right: 25,
    backgroundColor: "#FFFFFF",
    width: "100%",
    // borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // minHeight: 180,
    // padding: 15,
    paddingTop: 30,
    height: "100%",
    gap: 15,
    //justifyContent: "flex-start",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  btnView: {
    flexDirection: "row",
    gap: 20,
  },
  btnText: {
    fontSize: 14,
    color: "222222",
    textAlign: "center",
  },

  amount: {
    fontSize: 30,
    // paddingTop: 25,
    textAlign: "center",
    fontWeight: "700",
    color: "#222222",
  },
  totalBal: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
    color: "#666666",
  },

  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    borderRadius: 30,
    padding: 4,
    marginTop: 25,
    marginHorizontal: 5,
    backgroundColor: "#F4F6F6",
  },

  tabButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },

  activeTab: {
    backgroundColor: "#FFFFFF",
  },

  tabText: {
    color: "#666666",
    fontSize: 15,
    fontWeight: "500",
  },

  activeTabText: {
    color: "#222222",
    fontWeight: "700",
  },
  listContainer: {
    width: "100%",
    // marginTop: 10,
  },
  labels: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
    color: "#222222",
  },
});
