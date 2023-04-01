import HomeView from "./pages/HomeView";
import * as React from "react";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <HomeView />
      </NavigationContainer>
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};
