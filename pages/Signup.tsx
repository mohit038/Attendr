import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, useTheme } from "react-native-paper";
import Svg, { Path } from "react-native-svg";

const SignupScreen: React.FC = () => {
  const theme = useTheme();
  const handleGoogleLoginPress = () => {
    console.log("Login with Google button pressed");
    // Handle login with Google logic here
  };

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
    >
      <Button
        mode="contained"
        icon="google"
        onPress={handleGoogleLoginPress}
        style={{ ...styles.button }}
      >
        Signup with Google
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  button: {
    backgroundColor: "#4285F4",
  },
});

export default SignupScreen;
