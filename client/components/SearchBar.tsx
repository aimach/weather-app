import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import axios from "axios";
import { SearchCityResponseType } from "../types/CityResponse";
import SearchResult from "./SearchResult";
import { screenHeight } from "../utils/screenSize";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [result, setResult] = useState<SearchCityResponseType[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/search/${searchValue}`)
      .then((response) => {
        setResult(response.data);
      });
  }, [searchValue]);
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Taper le nom d'une ville..."
        onChangeText={(value) => setSearchValue(value)}
        keyboardType="default"
      />
      <FlatList
        data={result}
        renderItem={({ item }) => <SearchResult city={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.resultContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    padding: 20,
    borderRadius: 10,
  },
  resultContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    width: "100%",
    maxHeight: screenHeight / 2,
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
