const background = require("../assets/background.png");
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import ForecastMiniature from "../components/ForecastMiniature";
import { screenHeight, screenWidth } from "../utils/screenSize";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/Route";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ForecastDay } from "../types/ForecastDay";

type CityPageRouteProp = RouteProp<RootStackParamList, "City">;

type Props = {
  route: CityPageRouteProp;
};

export default function CityPage({ route }: Props) {
  const { cityName } = route.params;

  const [fiveDaysForecast, setFiveDaysForecast] = useState<ForecastDay[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = async () => {
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

  const getFavorites = async () => {
    try {
      const isAFavoriteCity = await AsyncStorage.getItem(cityName);
      if (isAFavoriteCity !== null) {
        setIsFavorite(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    try {
      getFavorites();
    } catch (error) {
      console.error(error);
    }
  }, [isFavorite]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/forecast/${cityName}/5`)
      .then((response) => {
        setFiveDaysForecast(response.data.forecast.forecastday);
      });
  }, []);

  return (
    fiveDaysForecast.length > 0 && (
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
        imageStyle={styles.backgroundImg}
      >
        <View style={styles.cityPageContainer}>
          <View style={styles.cityPageHeader}>
            <View style={styles.locationAndFavoriteContainer}>
              <View style={styles.locationContainer}>
                <Icon name="location-on" size={30} />
                <Text style={styles.locationText}>{cityName}</Text>
              </View>
              <View>
                <Pressable
                  onPress={() => {
                    setIsFavorite(!isFavorite);
                    handleFavorite();
                  }}
                >
                  <Icon name={isFavorite ? "star" : "star-border"} size={50} />
                </Pressable>
              </View>
            </View>
            <View style={styles.degreeContainer}>
              <Text style={styles.degreeText}>
                {Math.floor(fiveDaysForecast[0].day.avgtemp_c)}°C
              </Text>
            </View>
            <Text style={styles.degreeSecondText}>
              {fiveDaysForecast[0].day.condition.text}
            </Text>
          </View>
          <View style={styles.forecastContainer}>
            <Text style={styles.forecastTitle}>Prévisions</Text>
            <View style={styles.forecastFlexContainer}>
              {fiveDaysForecast.slice(1).map((forecast) => (
                <ForecastMiniature
                  forecast={forecast}
                  key={forecast.date_epoch}
                />
              ))}
            </View>
          </View>
        </View>
      </ImageBackground>
    )
  );
}

const styles = StyleSheet.create({
  cityPageContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    height: screenHeight,
    width: screenWidth,
    paddingTop: 50,
  },
  cityPageHeader: {
    width: "90%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  locationAndFavoriteContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  locationText: {
    fontSize: 30,
  },
  degreeContainer: {
    paddingTop: 40,
    width: "110%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  degreeText: {
    fontSize: 100,
  },
  degreeSecondText: {
    fontSize: 30,
  },
  forecastContainer: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  forecastTitle: {
    fontSize: 30,
    textAlign: "center",
    padding: 20,
    fontWeight: "bold",
  },
  forecastFlexContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
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
