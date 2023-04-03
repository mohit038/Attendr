import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

const Seperator = ({ height }: { height: number }) => {
  const theme = useTheme();
  return (
    <View
      style={{ backgroundColor: theme.colors.background, height: height }}
    />
  );
};

export default Seperator;

const styles = StyleSheet.create({
  container: {},
});
