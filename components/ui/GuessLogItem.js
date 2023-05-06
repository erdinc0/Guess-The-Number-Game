import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const GuessLogItem = (props) => {
  return (
    <View style={styles.tahminler}>
      <Text style={styles.tahminText}>
        Rakibin {props.roundNumber}. tahmini
      </Text>
      <Text style={styles.tahminText2}>{props.children}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  tahminler: {
    alignItems: "center",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.secondary,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  tahminText: {
    textAlign: "center",
    fontFamily: "bebasNeue",
    fontSize: 28,
    color: "white",
    paddingVertical: 5,
  },
  tahminText2: {
    textAlign: "center",
    fontFamily: "bebasNeue",
    fontSize: 28,
    color: "white",
    paddingVertical: 5,
  },
});
