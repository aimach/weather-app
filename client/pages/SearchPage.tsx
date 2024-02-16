import { Dimensions, Text, StyleSheet, View } from "react-native";
import { FiveDaysForecastResponse } from "../mock";
import Icon from "react-native-vector-icons/MaterialIcons";
import ForecastMiniature from "../components/ForecastMiniature";
import { FtoC } from "../utils/FtoC";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function SearchPage() {
  return (
    <View style={styles.searchPageContainer}>
      <View style={styles.searchPageHeader}>
        <View>
          <Text style={styles.headerText}>Rechercher une ville</Text>
        </View>
        <SearchBar />
      </View>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  searchPageContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: screenHeight,
    width: screenWidth,
  },
  searchPageHeader: {
    padding: 20,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  headerText: {
    fontSize: 30,
    marginTop: 40,
  },
});
