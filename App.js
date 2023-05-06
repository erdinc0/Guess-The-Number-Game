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
import LoadingScreen from "./screens/LoadingScreen";

export default function App() {
  let pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);

    setGameOver(false);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  let [userNumber, setUserNumber] = useState();
  let [gameOver, setGameOver] = useState(true);
  let [roundNumber, setRoundNumber] = useState(0);

  let gameOverHandler = (istrue) => {
    if (istrue) {
    } else {
      setUserNumber(null);
      setRoundNumber(0);
      console.log("sıfırlandı");
    }
    setGameOver(istrue);
  };

  if (gameOver && userNumber) {
    screen = (
      <GameOver
        chosenNumber={userNumber}
        yenidenBaslatHandler={gameOverHandler}
        roundNumber={roundNumber}
      />
    );
  } else if (userNumber) {
    screen = (
      <GameScreen
        chosenNumber={userNumber}
        setGameOver={gameOverHandler}
        setRoundNumber={setRoundNumber}
        roundNumber={roundNumber}
      />
    );
  }

  const [fontsLoaded] = useFonts({
    bebasNeue: require("./assets/fonts/ColaKind.ttf"),
  });

  if (!fontsLoaded) {
    return <LoadingScreen>Fontlar Yükleniyor</LoadingScreen>;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.linear}>
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri: "https://previews.123rf.com/images/xeni800/xeni8001804/xeni800180400029/99095727-gaming-dice-with-copy-space-on-pink-background-concept-for-games-game-board-presentation-banners.jpg",
        }}
        resizeMode="cover"
        imageStyle={{ opacity: 0.3 }}
        blurRadius={3}
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
