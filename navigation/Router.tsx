import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SigninScreen from "../pages/Signin";
import SignupScreen from "../pages/Signup";
import Home from "../pages/Home";
import { IconButton, useTheme } from "react-native-paper";
import AddNew from "../pages/AddNew";

const Stack = createNativeStackNavigator();

const Router = () => {
  const date = new Date();
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Today"
          component={({}) => <Home />}
          options={({ route, navigation }) => ({
            headerTitle: `${date.toDateString().slice(0, 11)}`,
            headerStyle: {
              backgroundColor: theme.colors.surface,
            },
            headerTitleStyle: {
              color: theme.colors.primary,
            },
            headerRight: (props) => (
              <IconButton
                icon="plus"
                size={15}
                style={{ borderWidth: 1 }}
                onPress={() => navigation.navigate("AddNew")}
              />
            ),
            headerLargeTitle: true,
          })}
        />
        <Stack.Screen
          name="AddNew"
          component={AddNew}
          options={{ presentation: "modal" }}
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
