import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { Button, CheckBox, Icon } from "@rneui/themed";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import WavyHeader from "../layouts/WavyHeader";
import { Dimensions } from "react-native";

export default function Login({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setrememberMe] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <WavyHeader
          customStyles={styles.svgCurve}
          customHeight={160}
          customTop={130}
          headerText={"Login"}
          customBgColor="#5663FF"
          customWavePattern="M0,96L48,112C96,128,192,160,288,
      186.7C384,213,480,235,576,213.3C672,192,768,128,864,
      128C960,128,1056,192,1152,208C1248,224,1344,192,1392,
      176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,
      0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,
      0,96,0,48,0L0,0Z"
        />
        <View style={styles.headerContainer}></View>
        <View style={styles.contentContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor="#979797"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor="#979797"
          />
          <CheckBox
            title="Beni hatırla"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={rememberMe}
            onPress={() => setrememberMe(!rememberMe)}
          />

          <Button
            title="Login"
            // loading={true}
            loadingProps={{
              size: "small",
              color: "rgba(111, 202, 186, 1)",
            }}
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "#FF5663",
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              paddingVertical: 10,
              height: 60,
            }}
            containerStyle={{
              width: 300,
              marginHorizontal: 35,
              marginVertical: 10,
            }}
            onPress={() => navigation.navigate("Explore")}
          />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text>Don't you have an account?</Text>
            <Button
              title="Clear"
              type="clear"
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Button>
          </View>
        </View>
      </View>
      {/* <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setemail}
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
          />
        </View>

        <View style={styles.selectionComponent}>
          <CheckBox
            title="Beni hatırla"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={rememberMe}
            onPress={() => setrememberMe(!rememberMe)}
          />
          <Button
            style={styles.forgetPasword}
            title="Clear"
            type="clear"
            titleStyle={{ color: "dark", fontSize: 16 }}
            // onPress={() => navigation.navigate("Login")}
          >
            Şifremi Unuttum
          </Button>
        </View>
        <StatusBar style="auto" />
      </View> */}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    height: Dimensions.get("window").height,
    justifyContent: "center",
  },
  headerContainer: {},

  svgCurve: {
    position: "absolute",
    top: 0,
    width: Dimensions.get("window").width,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    // change the color property for better output
    color: "red",
    textAlign: "center",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  contentContainer: {
    marginTop: 100,
    textAlign: "center",
  },
  selectionComponent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  forgetPasword: {
    marginTop: 5,
    width: "100%",
  },
});
