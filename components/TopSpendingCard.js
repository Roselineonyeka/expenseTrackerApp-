import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function TopSpendingCard({
  title,
  date,
  amount,
  icon,
  selected,
}) {
  return (
    <Pressable style={[styles.card, selected && styles.selectedCard]}>
      <Image source={icon} style={styles.icon} />

      <View style={styles.middle}>
        <Text style={[styles.title, selected && styles.selectedTitle]}>
          {title}
        </Text>

        <Text style={[styles.date, selected && styles.selectedDate]}>
          {date}
        </Text>
      </View>

      <Text style={[styles.amount, selected && styles.selectedAmount]}>
        {amount}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FBFBFB",

    marginHorizontal: 20,

    marginBottom: 10,

    borderRadius: 18,

    padding: 10,

    flexDirection: "row",

    alignItems: "center",

    shadowColor: "#000",

    shadowOpacity: 0.08,

    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
  },

  selectedCard: {
    backgroundColor: "#2F7D79",
  },

  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },

  middle: {
    flex: 1,
    marginLeft: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  selectedTitle: {
    color: "#FFF",
  },

  date: {
    marginTop: 4,
    color: "#888",
    fontSize: 13,
  },

  selectedDate: {
    color: "rgba(255,255,255,0.8)",
  },

  amount: {
    color: "#FF4D4D",
    fontWeight: "700",
    fontSize: 18,
  },

  selectedAmount: {
    color: "#D8FFF5",
  },
});
