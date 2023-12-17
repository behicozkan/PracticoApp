import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import WavyHeader from "../layouts/WavyHeader";
import { Dimensions } from "react-native";
import { useState } from "react";
import { Button, CheckBox, Icon } from "@rneui/themed";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [conditions, setConditions] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <WavyHeader
          customStyles={styles.svgCurve}
          customHeight={160}
          customTop={130}
          headerText={"Register"}
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
            onChangeText={setName}
            value={name}
            placeholder="Name"
            placeholderTextColor="#979797"
          />
          <TextInput
            style={styles.input}
            onChangeText={setSurname}
            value={surname}
            placeholder="SurName"
            placeholderTextColor="#979797"
          />
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
            title="Terms"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={terms}
            onPress={() => setTerms(!terms)}
          />
          <CheckBox
            title="Conditions"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={conditions}
            onPress={() => setConditions(!conditions)}
          />
          <Button
            title="SIGN UP"
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
          />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text>Already have an account?</Text>
            <Button
              title="Clear"
              type="clear"
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Button>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
    justifyContent: "center",
  },
  svgCurve: {
    position: "absolute",
    top: 0,
    width: Dimensions.get("window").width,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    // change the color property for better output
    color: "#fff",
    textAlign: "center",
    marginTop: 30,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  contentContainer: {
    marginTop: 120,
    textAlign: "center",
  },
});
