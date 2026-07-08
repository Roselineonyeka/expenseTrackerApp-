import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WalletListItem from "../../components/WalletListItem";
export default function HomeScreen() {
  const transactions = [
    {
      id: 1,
      title: "Upwork",
      date: "Today",
      amount: "+ $890.00",
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

  const contacts = [
    {
      id: "1",
      name: "Roseline",
      avatar: require("../../assets/images/humanimg_female.png"),
    },
    {
      id: "2",
      name: "Daniel",
      avatar: require("../../assets/images/humanimg_male.png"),
    },
    {
      id: "3",
      name: "Aisha",
      avatar: require("../../assets/images/humanimg_female.png"),
    },
    {
      id: "4",
      name: "Marcus",
      avatar: require("../../assets/images/humanimg_male.png"),
    },
    {
      id: "5",
      name: "Grace",
      avatar: require("../../assets/images/humanimg_female.png"),
    },
  ];

  return (
    <View style={styles.container}>
      {/* <LinearGradient
        colors={["#429690", "#2A7C76"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.topSection}
      > */}
      {/* <View style={styles.topSectionView}> */}
      {/* Row 1 */}
      {/* <View style={styles.row}>
            <Text style={styles.title}>Good afternoon,</Text>

            <Image
              source={require("../../assets/images/notificationball.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View> */}

      {/* Row 2 */}
      {/* <Text style={styles.subtitle}>Roseline Morgeana</Text> */}
      {/* </View> */}

      {/* </LinearGradient> */}

      <ImageBackground
        source={require("../../assets/images/headerbgimg.png")}
        style={styles.topSection}
        resizeMode="cover"
      >
        <View style={styles.topSectionView}>
          {/* Row 1 */}
          <View style={styles.row}>
            <Text style={styles.title}>Good afternoon,</Text>

            <Image
              source={require("../../assets/images/notificationball.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          {/* Row 2 */}
          <Text style={styles.subtitle}>Roseline Morgeana</Text>
        </View>
      </ImageBackground>

      <LinearGradient colors={["#1B5C58", "#2F7E79"]} style={styles.card}>
        {/* FLOATING CARD */}

        <View>
          <View style={styles.balanceRowDot}>
            <View style={styles.balanceRow}>
              <Text style={{ color: "#fff" }}>Total Balance</Text>

              <Image
                source={require("../../assets/images/downicon.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            <Text style={{ color: "#fff", fontSize: 30, fontWeight: "700" }}>
              ...
            </Text>
          </View>
          <Text style={{ color: "#fff", fontSize: 26, fontWeight: "700" }}>
            ₦2,548.00
          </Text>
        </View>
        <View>
          <View style={styles.balanceRowDot}>
            <View style={styles.balanceRow}>
              <Image
                source={require("../../assets/images/arrowdown.png")}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={{ color: "#fff" }}>Income</Text>
            </View>

            <View style={styles.balanceRow}>
              <Image
                source={require("../../assets/images/arrowup.png")}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={{ color: "#fff" }}>Expenses</Text>
            </View>
          </View>
          <View style={styles.balanceRowDot}>
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
              ₦ 1,840.00
            </Text>

            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "600",
                textAlign: "right",
              }}
            >
              ₦ 284.00
            </Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView
        style={styles.transactionSection}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={styles.transRowDot}>
          <View style={styles.balanceRow}>
            <Text style={{ color: "#222222", fontSize: 18, fontWeight: "600" }}>
              Transactions history
            </Text>

            <Image
              source={require("../../assets/images/downicon.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <Text style={{ color: "#666666", fontSize: 14, fontWeight: "300" }}>
            See all
          </Text>
        </View>

        {/* Replaced FlatList with a plain map to avoid nesting a
            VirtualizedList inside this vertical ScrollView */}
        <View style={{ paddingBottom: 30 }}>
          {/* {transactions.map((item) => (
            <View key={item.id} style={styles.transactionItem}>
              <View style={styles.transactionLeft}>
                <Image
                  source={item.icon}
                  style={styles.transactionIcon}
                  resizeMode="contain"
                />

                <View>
                  <Text style={styles.transactionTitle}>{item.title}</Text>
                  <Text style={styles.transactionDate}>{item.date}</Text>
                </View>
              </View>

              <Text
                style={[
                  styles.transactionAmount,
                  {
                    color: item.type === "credit" ? "#25A969" : "#FD3C4A",
                  },
                ]}
              >
                {item.amount}
              </Text>
            </View>
          ))} */}

          {transactions.map((item) => (
            <WalletListItem
              key={item.id}
              title={item.title}
              date={item.date}
              amount={item.amount}
              icon={item.icon}
              type={item.type}
            />
          ))}
        </View>

        <View style={styles.transRowDot}>
          <View style={styles.balanceRow}>
            <Text style={{ color: "#222222", fontSize: 18, fontWeight: "600" }}>
              Send Again
            </Text>

            <Image
              source={require("../../assets/images/downicon.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <Text style={{ color: "#666666", fontSize: 14, fontWeight: "300" }}>
            See all
          </Text>
        </View>

        {/* Horizontal FlatList is fine here — different scroll axis
            from the outer vertical ScrollView */}
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
            gap: 10,
          }}
          renderItem={({ item }) => (
            <View style={styles.contactItem}>
              <Image source={item.avatar} style={styles.contactAvatar} />
            </View>
          )}
        />
      </ScrollView>
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
    // backgroundColor: "#429690",
    justifyContent: "flex-start",
    // padding: 10,
    width: "100%",
    height: 260,
    paddingTop: 60,
    // borderBottomLeftRadius: 50,
    // borderBottomRightRadius: 50,
    alignItems: "flex-start",
  },

  topSectionView: {
    width: "100%",
    paddingHorizontal: 16,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 18,
  },

  subtitle: {
    color: "#FFFFFF",
    fontSize: 26,
    marginTop: 4,
    fontWeight: "600",
  },

  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  balanceRowDot: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },

  // image: {
  //   width: 8,
  //   height: 18,
  // },

  transactionSection: {
    marginTop: 85,
    width: "100%",
    flex: 1,
  },

  transRowDot: {
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 14,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 16,
    shadowColor: "#00000000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  transactionIcon: {
    width: 50,
    height: 50,
    marginRight: 12,
  },

  transactionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222222",
  },

  transactionDate: {
    fontSize: 12,
    color: "#999999",
    marginTop: 2,
  },

  transactionAmount: {
    fontSize: 16,
    fontWeight: "700",
  },

  contactItem: {
    alignItems: "center",
    paddingHorizontal: 10,
  },

  contactAvatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    // borderWidth: 1,
    // borderColor: "#EEEEEE",
  },
});
