import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SigninScreen from "../pages/Signin";
import SignupScreen from "../pages/Signup";
import Home from "../pages/Home";
import { Button, Text, useTheme } from "react-native-paper";
import AddNew from "../pages/AddNew";
import { Pressable } from "react-native";

const Stack = createNativeStackNavigator();

const Router = () => {
  const date = new Date();
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Today"
          component={Home}
          options={({ route, navigation }) => ({
            headerTitle: `${date.toDateString().slice(0, 11)}`,
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerTransparent: true,
            headerBlurEffect: "regular",
            headerTitleStyle: {
              color: theme.colors.primary,
            },
            headerShadowVisible: false,

            headerRight: () => (
              <Pressable onPress={() => navigation.navigate("AddNew")}>
                <Text
                  variant="titleMedium"
                  style={{
                    color: theme.colors.primary,
                    fontWeight: "400",
                    padding: 8,
                    paddingRight: 0,
                    paddingLeft: 24,
                  }}
                >
                  Add
                </Text>
              </Pressable>
            ),
            headerLargeTitle: true,
          })}
        />
        <Stack.Screen
          name="AddNew"
          component={AddNew}
          options={{ presentation: "modal", title: "Add New" }}
        />
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
