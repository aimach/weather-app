import AsyncStorage from "@react-native-async-storage/async-storage";
import { FavoritesForecast } from "../pages/HomePage";
import axios from "axios";

export const handleFavorite = async (isFavorite: boolean, cityName: string) => {
  try {
    if (isFavorite) {
      await AsyncStorage.removeItem(cityName);
    } else {
      await AsyncStorage.setItem(cityName, cityName);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getFavorites = async (
  cityName: string,
  setIsFavorite: (arg0: boolean) => void
) => {
  try {
    const isAFavoriteCity = await AsyncStorage.getItem(cityName);
    if (isAFavoriteCity !== null) {
      setIsFavorite(true);
    }
  } catch (e) {
    console.error(e);
  }
};

export const getFavoritesForecast = async (
  setFavoritesForecast: (arg0: FavoritesForecast[]) => void
) => {
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
