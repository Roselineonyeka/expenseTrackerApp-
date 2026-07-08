import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
export default function WalletListItem({ title, date, amount, icon, type }) {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Image source={icon} style={styles.icon} />

        <View style={styles.middle}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>

      {/* Right Side */}

      {type === "bill" ? (
        <Pressable style={styles.payButton}>
          <Text style={styles.payText}>Pay</Text>
        </Pressable>
      ) : (
        <Text
          style={[
            styles.amount,
            type === "credit" ? styles.creditAmount : styles.debitAmount,
          ]}
        >
          {amount}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 14,
    paddingHorizontal: 20,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  icon: {
    width: 50,
    height: 50,
    marginRight: 12,
  },

  middle: {
    justifyContent: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222222",
  },

  date: {
    fontSize: 12,
    color: "#999999",
    marginTop: 2,
  },

  amount: {
    fontSize: 16,
    fontWeight: "700",
  },

  creditAmount: {
    color: "#25A969",
  },

  debitAmount: {
    color: "#FD3C4A",
  },

  payButton: {
    backgroundColor: "#EAF7F6",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },

  payText: {
    color: "#2F7D79",
    fontSize: 16,
    fontWeight: "500",
  },
});
