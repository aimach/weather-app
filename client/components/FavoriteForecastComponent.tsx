import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/Route";
import { ForecastDay } from "../types/ForecastDay";
import Icon from "react-native-vector-icons/Feather";
import { getFavorites, handleFavorite } from "../utils/favorites";
import { useEffect, useState } from "react";

interface FavoriteForecastComponentProps {
  forecast: {
    name: string;
    forecast: ForecastDay;
  };
  page: string;
}

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function FavoriteForecastComponent({
  forecast,
  page,
}: FavoriteForecastComponentProps) {
  const navigation = useNavigation<NavigationProp>();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    getFavorites(forecast.name, setIsFavorite);
  }, [isFavorite]);

  return page === "favoritePage" ? (
    <View style={favoriteStyles.favForecastContainer}>
      <View style={favoriteStyles.locationContainer}>
        <Text style={favoriteStyles.locationText}>{forecast.name}</Text>
      </View>
      <View style={favoriteStyles.forecastContainer}>
        <Pressable onPress={() => handleFavorite(isFavorite, forecast.name)}>
          <Icon name="x" size={30} color="black" />
        </Pressable>
      </View>
    </View>
  ) : (
    <Pressable
      onPress={() =>
        navigation.navigate("City", {
          cityName: forecast.name,
        })
      }
    >
      <View style={homeStyles.favForecastContainer}>
        <View style={homeStyles.locationContainer}>
          <Text style={homeStyles.locationText}>{forecast.name}</Text>
        </View>
        <View style={homeStyles.forecastContainer}>
          <Image
            source={{
              uri: `http:${forecast.forecast.day.condition.icon}`,
              width: 50,
              height: 50,
            }}
          />
          <Text style={homeStyles.tempText}>
            {Math.floor(forecast.forecast.day.maxtemp_c)}°C
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const homeStyles = StyleSheet.create({
  favForecastContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 150,
    margin: 10,
    padding: 10,
    shadowColor: "#8e8ea0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  locationText: {
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  forecastContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 5,
  },
  tempText: {
    fontSize: 30,
  },
});

const favoriteStyles = StyleSheet.create({
  favForecastContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    // height: 150,
    padding: 10,
    shadowColor: "#8e8ea0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  locationText: {
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  forecastContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 5,
  },
  tempText: {
    fontSize: 30,
  },
});
