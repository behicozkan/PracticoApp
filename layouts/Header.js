import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Dimensions } from "react-native";

const Header = (props) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    headerContainer: {
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.header,
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height / 8,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    headerText: {
      color: "#fff",
      fontSize: 22,
      fontWeight: "bold",
      marginTop: 20,
    },
  });

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.headerText}</Text>
    </View>
  );
};

export default Header;
