import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SigninScreen from "../pages/Signin";
import SignupScreen from "../pages/Signup";
import Home from "../pages/Home";
import { IconButton } from "react-native-paper";

const Stack = createNativeStackNavigator();

const Router = () => {
  const date = new Date();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Today"
          component={Home}
          options={{
            headerTitle: `${date.toDateString().slice(0, 11)}`,
            headerRight: () => (
              <IconButton icon="plus" size={15} style={{ borderWidth: 1 }} />
            ),
          }}
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
