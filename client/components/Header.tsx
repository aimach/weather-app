import { StyleSheet, Text, View } from "react-native";
import { screenWidth, screenHeight } from "../utils/screenSize";
import { getDay, format } from "date-fns";
import { days } from "../utils/days";
import { fr } from "date-fns/locale";

export default function Header({ type }: { type: string }) {
  const dayOfTheWeek = days[getDay(new Date())];
  const today = format(new Date(), "dd MMMM", { locale: fr });
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>
        {type === "forecast" ? `${dayOfTheWeek} ${today}` : "Favoris"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 30,
    width: screenWidth,
    alignItems: "flex-start",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 25,
    padding: 25,
  },
});
