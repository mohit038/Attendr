import React from "react";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

const Theme = ({ children }: { children: React.ReactElement }) => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default Theme;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};
