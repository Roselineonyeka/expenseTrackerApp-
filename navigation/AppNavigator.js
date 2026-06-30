import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../src/screens/HomeScreen";
import StatisticsScreen from "../src/screens/StatisticsScreen";
import AddExpenseScreen from "../src/screens/AddExpenseScreen";
import ProfileScreen from "../src/screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 110,
          backgroundColor: "red",
          position: "absolute",
          //   backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarBackground: () => (
          <Image
            source={require("../assets/images/bottom_meun_bgimg.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="stretch"
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/images/homeicon.png")}
              style={{
                // width: 24,
                // height: 24,
                tintColor: focused ? "#2A7C76" : "#999999",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/images/airtimeicon.png")}
              style={{
                // width: 24,
                // height: 24,
                tintColor: focused ? "#2A7C76" : "#999999",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tab.Screen
        name="PlusScreen"
        component={AddExpenseScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: -30,
                marginLeft: -10,
              }}
            >
              <Image
                source={require("../assets/images/circel_plus_icon.png")}
                style={{ width: 100, height: 70 }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="AddExpense"
        component={AddExpenseScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/images/paymenticon.png")}
              style={{
                // width: 24,
                // height: 24,
                tintColor: focused ? "#2A7C76" : "#999999",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/images/usericon.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#2A7C76" : "#999999",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
