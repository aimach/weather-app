import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SearchCityResponseType } from "../types/CityResponse";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/Route";

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function SearchResult({
  city,
}: {
  city: SearchCityResponseType;
}) {
  const navigation = useNavigation<NavigationProp>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("City", {
          cityName: city.name,
        })
      }
    >
      <Text style={styles.resultText}>{city.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resultText: {
    width: "100%",
    padding: 15,
    fontSize: 20,
  },
});
