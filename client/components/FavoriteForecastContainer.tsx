import { FlatList, View, StyleSheet, Text } from "react-native";
import FavoriteForecastComponent from "./FavoriteForecastComponent";
import { screenHeight, screenWidth } from "../utils/screenSize";
import { FlatGrid } from "react-native-super-grid";
import { ForecastDay } from "../types/ForecastDay";
import { FavoritesForecast } from "../pages/HomePage";

interface FavoriteForecastProps {
  favoritesForecast: FavoritesForecast[];
}

export default function FavoriteForecastContainer({
  favoritesForecast,
}: FavoriteForecastProps) {
  return (
    favoritesForecast !== undefined && (
      <FlatGrid
        data={favoritesForecast}
        renderItem={({ item }) => <FavoriteForecastComponent forecast={item} />}
        keyExtractor={(item) =>
          item.forecast.date_epoch + Math.random().toString()
        }
        itemDimension={screenWidth / 2 - 20}
        style={styles.favForecastContainer}
      />
    )
  );
}

const styles = StyleSheet.create({
  favForecastContainer: {
    height: "100%",
    width: "100%",
  },
});
