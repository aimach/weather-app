import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
const background = require("../assets/background.png");
import { screenHeight, screenWidth } from "../utils/screenSize";
import FavoriteForecastContainer from "../components/FavoriteForecastContainer";
import { ForecastDay } from "../types/ForecastDay";
import { getFavoritesForecast } from "../utils/favorites";

export interface FavoritesForecast {
  name: string;
  forecast: ForecastDay;
}

export default function HomePage() {
  const [favoritesForecast, setFavoritesForecast] = useState<
    FavoritesForecast[]
  >([]);

  useEffect(() => {
    getFavoritesForecast(setFavoritesForecast);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
        imageStyle={styles.backgroundImg}
      >
        <Header type="forecast" />
        <FavoriteForecastContainer
          favoritesForecast={favoritesForecast}
          page="homePage"
        />
        <Navbar />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: screenHeight,
  },
  background: {
    justifyContent: "space-between",
    width: screenWidth,
    height: screenHeight,
  },
  backgroundImg: {
    opacity: 0.7,
    alignSelf: "flex-end",
  },
});
