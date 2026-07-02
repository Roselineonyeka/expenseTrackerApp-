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
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import StatisticsChart from "../../components/StatisticsChart";
import TopSpendingCard from "../../components/TopSpendingCard";

export default function HomeScreen() {
  const tabs = ["Days", "Week", "Month", "Year"];
  const [selectedTab, setSelectedTab] = useState("Days");
  const chartData = {
    Days: {
      labels: ["8AM", "10AM", "12PM", "2PM", "4PM"],
      values: [420, 760, 1230, 910, 670],
    },

    Week: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      values: [500, 900, 650, 1300, 850, 1700, 1200],
    },

    Month: {
      labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      values: [600, 950, 1230, 820, 1600, 1100, 900],
    },

    Year: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      values: [8000, 12000, 9500, 17000, 13500],
    },
  };

  const topSpendings = [
    {
      id: 1,
      title: "Starbucks",
      date: "Jan 12, 2022",
      amount: "- $150.00",
      icon: require("../../assets/images/starbucksimg.png"),
      selected: false,
    },
    {
      id: 2,
      title: "Transfer",
      date: "Yesterday",
      amount: "- $85.00",
      icon: require("../../assets/images/humanimg_female.png"),
      selected: true,
    },
    {
      id: 3,
      title: "Youtube",
      date: "Jan 16, 2022",
      amount: "- $11.99",
      icon: require("../../assets/images/youtubeimg.png"),
      selected: false,
    },
    {
      id: 4,
      title: "Starbucks",
      date: "Jan 12, 2022",
      amount: "- $150.00",
      icon: require("../../assets/images/starbucksimg.png"),
      selected: false,
    },
    {
      id: 5,
      title: "Transfer",
      date: "Yesterday",
      amount: "- $85.00",
      icon: require("../../assets/images/humanimg_female.png"),
      selected: false,
    },
    {
      id: 6,
      title: "Youtube",
      date: "Jan 16, 2022",
      amount: "- $11.99",
      icon: require("../../assets/images/youtubeimg.png"),
      selected: false,
    },
  ];
  const screenWidth = Dimensions.get("window").width;

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
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
        {/* Chart */}
        <StatisticsChart data={chartData[selectedTab]} />
        {/* Top Spending Title */}

        <View style={styles.topHeader}>
          <Text style={styles.topTitle}>Top Spending</Text>

          <Pressable>
            <Image
              source={require("../../assets/images/shareicon.png")}
              style={styles.filterIcon}
            />
          </Pressable>
        </View>

        {/* Spending List */}
        <View>
          {topSpendings.map((item) => (
            <TopSpendingCard
              key={item.id}
              title={item.title}
              date={item.date}
              amount={item.amount}
              icon={item.icon}
              selected={item.selected}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    //alignItems: "center",
    marginTop: 50,
  },
  scrollContent: {
    paddingBottom: 120,
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

  topHeader: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 30,
  },
});
