import "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import BottomTabs from "./navigation/BottomTabs";

import AuthContextProvider from "./Context/AuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigation from "./navigation/MainNavigation";
const Stack = createStackNavigator();
export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthContextProvider>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </AuthContextProvider>
      </SafeAreaProvider>
    );
  }
}
