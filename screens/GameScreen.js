import {
  Text,
  StyleSheet,
  View,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/numberContainer";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/ui/GuessLogItem";

let generateRandomBetween = (min, max, exclude) => {
  const randNum = Math.floor(Math.random() * (max - min)) + min;

  if (randNum === exclude) {
    generateRandomBetween(1, 100, exclude);
  } else {
    return randNum;
  }
};

let max = 100;
let min = 1;
let roundNumber = 1;

let GameScreen = (props) => {
  let initialGuess = generateRandomBetween(1, 100, props.chosenNumber);

  const [nowGuess, setNowGuess] = useState(initialGuess);
  let [tahminler, setTahminler] = useState([initialGuess]);

  useEffect(() => {
    max = 100;
    min = 1;
    roundNumber = 1;
    initialGuess = generateRandomBetween(1, 100, props.chosenNumber);
  }, []);

  useEffect(() => {
    if (nowGuess == props.chosenNumber) {
      props.setGameOver(true);
      setTahminler([]);
    }
  }, [nowGuess, props.chosenNumber, props.setGameOver]);

  let yeniTahminHandler = (direction) => {
    if (
      (direction === "aşağı" && nowGuess < props.chosenNumber) ||
      (direction === "yukarı" && nowGuess > props.chosenNumber)
    ) {
      Alert.alert("yalan", "bunu biliyorsun", [
        { text: "pardon", style: "cancel" },
      ]);
      return;
    } else {
      if (direction === "aşağı") {
        max = nowGuess;
      } else if (direction == "yukarı") {
        min = nowGuess + 1;
      }
    }

    props.setRoundNumber(roundNumber++);

    let newTahmin = generateRandomBetween(min, max, nowGuess);

    setNowGuess(newTahmin);
    setTahminler([newTahmin, ...tahminler]);
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Title baslik={"Rakibin Tahmini"} />
      <NumberContainer>{nowGuess}</NumberContainer>

      <View style={styles.feedback}>
        <PrimaryButton
          style={styles.buton}
          onPress={() => yeniTahminHandler("aşağı")}
        >
          <Ionicons name="ios-remove-circle" size={54} color="white" />
        </PrimaryButton>
        <PrimaryButton
          style={styles.buton}
          onPress={() => yeniTahminHandler("yukarı")}
        >
          <Ionicons name="ios-add-circle" size={54} color="white" />
        </PrimaryButton>
      </View>

      <FlatList
        data={tahminler}
        renderItem={(itemData) => (
          <GuessLogItem roundNumber={tahminler.length - itemData.index}>
            {itemData.item}
          </GuessLogItem>
        )}
        keyExtractor={(item) => item}
      />

      {/*  <ScrollView>
        <View style={styles.tahminler}>
          {tahminler.map((tahmin) => (
            <Text key={tahmin} style={styles.tahminText}>
              {tahmin}
            </Text>
          ))}
        </View>
      </ScrollView> */}
    </View>
  );
};

let styles = StyleSheet.create({
  icerik: {
    fontSize: 48,
    alignSelf: "center",
    textAlign: "center",
    paddingVertical: 20,
    fontWeight: "bold",
    color: "#ffea00",
  },
  feedback: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buton: {
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameScreen;
