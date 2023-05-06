import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

let GameOver = (props) => {
  return (
    <View style={styles.conainer}>
      <Title style={{ width: "90%" }} baslik={"Game Over"}></Title>
      <Text style={styles.text}>{props.chosenNumber}</Text>
    </View>
  );
};

let styles = StyleSheet.create({
  conainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.primary,
    fontSize: 38,
    fontWeight: "bold",
  },
  buton: {
    width: 200,
    height: 100,
    justifyContent: "center",
  },
});

export default GameOver;
