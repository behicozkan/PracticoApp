import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import WavyHeader from "../layouts/WavyHeader";
import { Dimensions } from "react-native";
import Footer from "../layouts/Footer";
import { useColorScheme } from "react-native";
import { useTheme } from "@react-navigation/native";
import Header from "../layouts/Header";

export default function Explore() {
  //const theme = useColorScheme(); //cihazın koyu modda olup olmadığını anlayabiliyoruz.
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <Header headerText="All Meetups"></Header>
      <ScrollView>
        <Text>main</Text>

        <Text style={{ color: colors.primary }}> Light Mode </Text>

        <Text style={colors.primary}> Dark Mode</Text>
      </ScrollView>
      <Footer />
    </View>
  );
}
