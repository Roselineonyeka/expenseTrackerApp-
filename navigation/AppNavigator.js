import React from "react";
import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Svg, { Path } from "react-native-svg";

import HomeScreen from "../src/screens/HomeScreen";
import StatisticsScreen from "../src/screens/StatisticsScreen";
import AddExpenseScreen from "../src/screens/AddExpenseScreen";
import ProfileScreen from "../src/screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const { width: W } = Dimensions.get("window");

const TAB_H = 120; // flat bar height
const NOTCH_R = 32; // radius of the circular bump
const NOTCH_CX = W / 2; // center x of notch

// const ICONS = {
//   Home: require("../assets/images/homeicon.png"),
//   Statistics: require("../assets/images/airtimeicon.png"),
//   AddExpense: require("../assets/images/paymenticon.png"),
//   Profile: require("../assets/images/usericon.png"),
// };
const ICONS = {
  Home: {
    active: require("../assets/images/homeicon.png"),
    inactive: require("../assets/images/homeicon_inactive.png"),
  },
  Statistics: {
    active: require("../assets/images/airtimeicon_active.png"),
    inactive: require("../assets/images/airtimeicon.png"),
  },
  AddExpense: {
    active: require("../assets/images/paymenticon_active.png"),
    inactive: require("../assets/images/paymenticon.png"),
  },
  Profile: {
    active: require("../assets/images/usericon_active.png"),
    inactive: require("../assets/images/usericon.png"),
  },
};
// Draws a white bar with a smooth circular notch cut from the top center
function TabBarBackground() {
  const r = NOTCH_R;
  const cx = NOTCH_CX;
  const curveOffset = 10; // how wide the curved entry/exit is
  //const curveOffset = 100; // how wide the curved entry/exit is

  const d = [
    `M0,0`,
    `L${cx - r - curveOffset},0`,
    `Q${cx - r},0 ${cx - r},${-r * 0.3}`,
    `A${r},${r} 0 0,1 ${cx + r},${-r * 0.3}`,
    `Q${cx + r},0 ${cx + r + curveOffset},0`,
    `L${W},0`,
    `L${W},${TAB_H}`,
    `L0,${TAB_H}`,
    `Z`,
  ].join(" ");

  return (
    <Svg
      width={W}
      height={TAB_H + NOTCH_R}
      style={{ position: "absolute", bottom: -50 }}
    >
      <Path d={d} fill="#FFFFFF" />
    </Svg>
  );
}

function CustomTabBar({ state, navigation }) {
  const leftRoutes = [state.routes[0], state.routes[1]];
  const plusRoute = state.routes[2];
  const rightRoutes = [state.routes[3], state.routes[4]];

  const handlePress = (route) => {
    const isFocused = state.routes[state.index].key === route.key;
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const renderIcon = (route) => {
    const isFocused = state.routes[state.index].key === route.key;
    return (
      <TouchableOpacity
        key={route.key}
        onPress={() => handlePress(route)}
        style={styles.tabItem}
        // activeOpacity={0.7}
      >
        {/* <Image
          source={ICONS[route.name]}
          style={{
            width: 24,
            height: 24,
            // tintColor: isFocused ? "#438883" : "#AAAAAA",
            tintColor: isFocused ? "#2A7C76" : "#AAAAAA",
          }}
          resizeMode="contain"
        /> */}

        <Image
          source={
            isFocused ? ICONS[route.name].active : ICONS[route.name].inactive
          }
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container} pointerEvents="box-none">
      {/* SVG drawn background with notch */}
      <TabBarBackground />

      {/* Shadow layer underneath the bar */}
      <View style={styles.shadowBar} />

      {/* Left 2 icons */}
      <View style={styles.sideSection}>
        {leftRoutes.map((r) => renderIcon(r))}
      </View>

      {/* Center spacer */}
      <View style={{ width: NOTCH_R * 2 + 20 }} />

      {/* Right 2 icons */}
      <View style={styles.sideSection}>
        {rightRoutes.map((r) => renderIcon(r))}
      </View>

      {/* Plus button — exactly centered, floats above notch */}
      <TouchableOpacity
        onPress={() => handlePress(plusRoute)}
        style={styles.plusButton}
        activeOpacity={0.85}
      >
        <View style={styles.plusCircle}>
          <Image
            source={require("../assets/images/circel_plusshadow_icon.png")}
            // style={{ width: 30, height: 30, tintColor: "#FFFFFF" }}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const TOTAL_H = TAB_H + NOTCH_R;
const PLUS_SIZE = NOTCH_R * 2 - 8;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: W,
    height: TOTAL_H,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: 28,
  },

  shadowBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: TAB_H,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -4 },
    elevation: 10,
  },

  sideSection: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 20,
  },

  tabItem: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  plusButton: {
    position: "absolute",
    left: W / 2 - PLUS_SIZE / 2,
    bottom: TAB_H - PLUS_SIZE / 2 + 6,
    width: PLUS_SIZE,
    height: PLUS_SIZE,
    paddingHorizontal: 5,
    paddingVertical: 30,
  },

  plusCircle: {
    width: PLUS_SIZE,
    height: PLUS_SIZE,
    borderRadius: PLUS_SIZE / 2,
    // backgroundColor: "#2A7C76",
    alignItems: "center",
    justifyContent: "center",
    // shadowColor: "#2A7C76",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
});

export default function AppNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="PlusScreen" component={AddExpenseScreen} />
      <Tab.Screen name="AddExpense" component={AddExpenseScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
