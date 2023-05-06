import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const LoadingScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: {
    textAlign: "center",
    fontSize: 28,
  },
});
