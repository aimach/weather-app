import { StyleSheet, Text, View, Image } from "react-native";
import { format } from "date-fns";
import { ForecastDay } from "../types/ForecastDay";

interface ForecastMiniatureProps {
  forecast: ForecastDay;
}

export default function ForecastMiniature({
  forecast,
}: ForecastMiniatureProps) {
  const imgUrl = `https:${forecast.day.condition.icon}`;
  return (
    <View style={styles.forecastMiniatureContainer} key={forecast.date_epoch}>
      <Image source={{ uri: imgUrl, width: 45, height: 45 }} />
      <Text style={styles.dayText}>
        {format(new Date(forecast.date), "dd/MM")}
      </Text>
      <Text style={styles.tempText}>
        {Math.floor(forecast.day.avgtemp_c)}°C
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  forecastMiniatureContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  dayText: {
    color: "grey",
  },
  tempText: {
    fontSize: 30,
  },
});
