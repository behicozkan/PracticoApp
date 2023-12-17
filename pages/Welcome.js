import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/themed";
import WavyHeader from "../layouts/WavyHeader";
import { Dimensions } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={{ fontSize: 30 }}>Welcome To Practico App</Text>
      </View>

      <View style={styles.footer}>
        <Button
          buttonStyle={{
            backgroundColor: "#ffff",
            borderColor: "transparent",
            borderWidth: 0,
            width: 300,
            height: 60,
            borderRadius: 10,
            marginVertical: 10,
          }}
          titleStyle={{
            color: "dark",
          }}
          onPress={() => navigation.navigate("Register")}
        >
          Kaydol
        </Button>
        <Button
          title="Clear"
          type="clear"
          titleStyle={{ color: "white" }}
          onPress={() => navigation.navigate("Login")}
        >
          Giriş Yap
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  titleWrapper: {},

  contentContainer: {
    flex: 1, // pushes the footer to the end of the screen
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 250,
    backgroundColor: "#6C63FF",
    justifyContent: "center",
    alignItems: "center",
  },
  wave: {
    backgroundColor: "#6C63FF",
  },
  button: {
    color: "white",
    backgroundColor: "red",
  },
});
