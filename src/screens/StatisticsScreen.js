// import React from "react";
import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const tabs = ["Days", "Week", "Month", "Year"];
  const [selectedTab, setSelectedTab] = useState("Days");
  const spending = [
    {
      id: "1",
      title: "Starbucks",
      date: "Jan 12, 2022",
      amount: "-$150",
      icon: require("../../assets/images/humanimg_female.png"),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      {/* Header 1 */}
      <View style={styles.Header}>
        <TouchableOpacity>
          <Image source={require("../../assets/images/goBackArrow.png")} />
        </TouchableOpacity>

        <Text style={styles.title}>Statistics</Text>
        <TouchableOpacity>
          <Image source={require("../../assets/images/downloadicon.png")} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.dropdown_container}>
        <TouchableOpacity style={styles.dropdown}>
          <Text>Expense</Text>

          <Image source={require("../../assets/images/Arrow_downicon.png")} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={spending}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.spendingItem}>
            <Image source={item.icon} style={styles.spendingIcon} />

            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.spendingTitle}>{item.title}</Text>
              <Text style={styles.spendingDate}>{item.date}</Text>
            </View>

            <Text style={styles.spendingAmount}>{item.amount}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    //alignItems: "center",
    marginTop: 50,
  },

  Header: {
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#222222",
    fontWeight: "600",
    fontSize: 18,
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 24,
  },

  tab: {
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 12,
    backgroundColor: "transparent",
  },

  activeTab: {
    backgroundColor: "#429690",
  },

  tabText: {
    color: "#777777",
    fontSize: 14,
  },

  activeTabText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  dropdown_container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  dropdown: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    // width: "100%",
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
    borderColor: "#666666",
    borderWidth: 1,
    fontSize: 14,
    fontWeight: "500",
    color: "#666666",
  },
});
