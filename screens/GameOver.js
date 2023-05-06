import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

let GameOver = (props) => {
  return (
    <View style={styles.conainer}>
      <Text style={styles.text}>{props.chosenNumber}</Text>
      <PrimaryButton
        style={styles.buton}
        onPress={() => {
          props.setGameOver(false);
          props.setUserNumber();
        }}
      >
        Yeniden Başla
      </PrimaryButton>
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
