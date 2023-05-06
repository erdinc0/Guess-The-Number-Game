import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

let width = Dimensions.get("screen").width;

let gameOverurl = "";

if (Platform.OS === "ios") {
  gameOverurl =
    "https://cdn.osxdaily.com/wp-content/uploads/2019/02/apple-logo-screensaver-from-github-610x381.jpg";
} else {
  gameOverurl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJySkocaG7VC0e7zd6wOr_7mZce3sBD3EVZA&usqp=CAU";
}

let GameOver = (props) => {
  return (
    <View style={styles.conainer}>
      <View style={styles.cardContainer}>
        <Title style={{ width: "90%" }} baslik={"Game Over"}></Title>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: gameOverurl,
            }}
            style={styles.image}
          ></Image>
        </View>
        <Text style={styles.text}>
          Seçtiğin sayı olan "{props.chosenNumber}", yapay zeka tarafından
          {" " + props.roundNumber} denemede bulundu.
        </Text>
        <PrimaryButton
          style={styles.buton}
          onPress={() => props.yenidenBaslatHandler(false)}
        >
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
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    padding: 24,
    fontFamily: "bebasNeue",
    textAlign: "center",
  },
  buton: {
    width: width < 380 ? 150 : 200,
    height: width < 380 ? 75 : 100,
    justifyContent: "center",
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",

    borderRadius: 500,
  },
  imageContainer: {
    width: width < 395 ? 200 : 300,
    height: width < 395 ? 200 : 300,
    marginTop: 20,
  },
});

export default GameOver;
