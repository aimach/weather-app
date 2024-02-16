import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function Navbar() {
  const navigation = useNavigation();

  return (
    <View style={styles.navbarContainer}>
      <Pressable
        onPress={() => navigation.navigate("Search" as never)}
        style={styles.button}
      >
        <Icon name="search" size={30} color="black" />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("Home" as never)}
        style={styles.button}
      >
        <Icon name="home" size={30} color="black" />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("City" as never)}
        style={styles.button}
      >
        <Icon name="star" size={30} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    padding: 20,
    marginRight: 20,
    marginTop: 10,
  },
});
