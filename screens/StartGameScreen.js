import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";

let width = Dimensions.get("screen").width;

const StartGameScreen = (props) => {
  let [enteredNumber, setEnteredNumber] = useState("");

  let resetInput = () => {
    setEnteredNumber("");
  };

  let confirmbutton = () => {
    let intConvertedNumber = parseInt(enteredNumber);
    if (
      intConvertedNumber >= 0 &&
      intConvertedNumber <= 100 &&
      intConvertedNumber != "" &&
      isNaN(intConvertedNumber) != true
    ) {
      props.onPickNumber(intConvertedNumber);
    } else {
      Alert.alert(
        `Girilen "` + enteredNumber + `" geçerli bir sayı değil!`,
        "Lütfen geçerli bir sayı gir",
        [
          {
            text: "Tamam",
            onPress: resetInput,
          },
        ]
      );
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View>
          <View style={styles.baslik}>
            <Title style={styles.title} baslik="Aklından Bir Sayı Tut"></Title>
          </View>
          <View style={styles.container}>
            <View style={styles.textinputcontainer}>
              <TextInput
                style={styles.textInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={setEnteredNumber}
                placeholder="Bir Sayı Tut"
                placeholderTextColor={"#c34276"}
              />
            </View>
            <View style={styles.butonscontainer}>
              <View style={styles.butoncontainer}>
                <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
              </View>
              <View style={styles.butoncontainer}>
                <PrimaryButton onPress={confirmbutton}>Confirm</PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

let styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#a72063",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
  textInput: {
    height: 75,
    fontSize: width < 380 ? 18 : 24,
    borderBottomColor: "#ddb52f",
    elevation: 4,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: Colors.secondary,
    width: "80%",
    borderRadius: 28,
    padding: 14,
    fontFamily: "bebasNeue",
  },
  textinputcontainer: {
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  butonscontainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  butoncontainer: { flex: 1 },
  baslik: {
    padding: 16,
    marginHorizontal: 24,
  },
});

export default StartGameScreen;
