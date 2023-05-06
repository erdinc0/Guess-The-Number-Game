import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

let GameOver = (props) => {
  return (
    <View style={styles.conainer}>
      <View style={styles.cardContainer}>
        <Title style={{ width: "90%" }} baslik={"Game Over"}></Title>
        <Text style={styles.text}>
          Seçtiğin sayı olan "{props.chosenNumber}", yapay zeka tarafından
          {" " + props.roundNumber} denemede bulundu.
        </Text>
        <PrimaryButton onPress={() => props.yenidenBaslatHandler(false)}>
          Yeniden Başla
        </PrimaryButton>
      </View>
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
    fontSize: 28,
    fontWeight: "bold",
    padding: 24,

    textAlign: "center",
  },
  buton: {
    width: 200,
    height: 100,
    justifyContent: "center",
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;
