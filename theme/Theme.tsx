import React from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  MD3DarkTheme,
} from "react-native-paper";
import { useColorScheme } from "react-native";

const Theme = ({ children }: { children: React.ReactElement }) => {
  const colorScheme = useColorScheme();
  const paperTheme = colorScheme === "dark" ? darkTheme : lightTheme;
  return <PaperProvider theme={paperTheme}>{children}</PaperProvider>;
};

export default Theme;

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6200ee",
    accent: "#03dac4",
    background: "#f6f6f6",
    surface: "#ffffff",
    text: "#000000",
    disabled: "#a1a1a1",
    placeholder: "#a1a1a1",
    backdrop: "#00000099",
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#bb86fc",
    accent: "#03dac6",
    background: "#121212",
    surface: "#121212",
    text: "#ffffff",
    disabled: "#3c3c3c",
    placeholder: "#a1a1a1",
    backdrop: "#00000099",
  },
};
