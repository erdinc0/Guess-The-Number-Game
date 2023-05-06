import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function App() {
  let pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);

    setGameOver(false);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  let [userNumber, setUserNumber] = useState();
  let [gameOver, setGameOver] = useState(true);

  let gameOverHandler = (istrue) => {
    setGameOver(istrue);
  };

  if (gameOver && userNumber) {
    screen = (
      <GameOver
        chosenNumber={userNumber}
        setGameOver={gameOverHandler}
        setUserNumber={setUserNumber}
      />
    );
  } else if (userNumber) {
    screen = (
      <GameScreen chosenNumber={userNumber} setGameOver={gameOverHandler} />
    );
  }

  const [fontsLoaded] = useFonts({
    bebasNeue: require("./assets/fonts/Bebas.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Fontlar Yüklendi</Text>
      </View>
    );
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.linear}>
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri: "https://www.foodbloggersofcanada.com/wp-content/uploads/2016/09/CookieStyling_01.jpg",
        }}
        resizeMode="cover"
        imageStyle={{ opacity: 0.25 }}
        blurRadius={2}
      >
        <SafeAreaView style={styles.maincontainer}>{screen}</SafeAreaView>
      </ImageBackground>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  linear: {
    flex: 1,
  },
});
