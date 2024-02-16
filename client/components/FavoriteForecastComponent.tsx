import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/Route";
import { ForecastDay } from "../types/ForecastDay";

interface FavoriteForecastComponentProps {
  forecast: {
    name: string;
    forecast: ForecastDay;
  };
}

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function FavoriteForecastComponent({
  forecast,
}: FavoriteForecastComponentProps) {
  const navigation = useNavigation<NavigationProp>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("City", {
          cityName: forecast.name,
        })
      }
    >
      <View style={styles.favForecastContainer}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>{forecast.name}</Text>
        </View>
        <View style={styles.forecastContainer}>
          <Image
            source={{
              uri: `http:${forecast.forecast.day.condition.icon}`,
              width: 50,
              height: 50,
            }}
          />
          <Text style={styles.tempText}>
            {Math.floor(forecast.forecast.day.maxtemp_c)}°C
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
