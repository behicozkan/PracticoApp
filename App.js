import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/base";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppearanceProvider } from "react-native";
import { useColorScheme } from "react-native";

const Stack = createNativeStackNavigator();

const Dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "rgb(255, 45, 85)",
    text: "#fff",
    icon: "#fff",
    footer: "#263159",
    header: "#263159",
  },
};
const Light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5663FF",
    secondary: "#FF5663",
    footer: "#fff",
    icon: "#757D8C",
    header: "#5663FF",
  },
};

export default function App() {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === "dark" ? Dark : Light}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome" //Welcome olmalı dev süreci için değiştirebiliriz.
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Explore" component={Explore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
