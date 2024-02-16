import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./pages/HomePage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CityPage from "./pages/CityPage";
import SearchPage from "./pages/SearchPage";
import { RootStackParamList } from "./types/Route";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Search" component={SearchPage} />
        <Stack.Screen name="City" component={CityPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
