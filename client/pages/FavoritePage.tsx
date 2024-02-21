import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FavoriteForecastContainer from "../components/FavoriteForecastContainer";
const background = require("../assets/background.png");
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

import { FavoritesForecast } from "./HomePage";

export default function FavoritePage() {
  const [favoritesForecast, setFavoritesForecast] = useState<
    FavoritesForecast[]
  >([]);

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const promises = keys.map(async (key) => {
          const response = await axios.get(
            `http://localhost:3000/forecast/${key}/1`
          );
          return {
            name: key,
            forecast: response.data.forecast.forecastday[0],
          };
        });
        const newFavoritesForecast = await Promise.all(promises);
        setFavoritesForecast(newFavoritesForecast);
      } catch (error) {
        console.log(error);
      }
    };

    getFavorites();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
        imageStyle={styles.backgroundImg}
      >
        <Header type="favorite" />
        <FavoriteForecastContainer
          favoritesForecast={favoritesForecast}
          page="favoritePage"
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
