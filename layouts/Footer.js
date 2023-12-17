import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import WavyHeader from "../layouts/WavyHeader";
import { Dimensions } from "react-native";
import { Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native";
//

export default function Footer() {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    footer: {
      backgroundColor: colors.footer,
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height / 10,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 25,
      paddingVertical: 15,
      borderTopEndRadius: 20,
      borderTopLeftRadius: 20,
      borderTopColor: "#73AD21",
    },
  });

  return (
    <View style={styles.footer}>
      <Button
        icon={<Icon color={colors.icon} name="map-marker" size={25} />}
        buttonStyle={{ backgroundColor: "transparent" }}
      />

      <Button
        icon={<Icon color={colors.icon} name="bell" size={25} />}
        buttonStyle={{ backgroundColor: "transparent" }}
      />
      <Button
        icon={<Icon color={colors.icon} name="envelope" size={25} />}
        buttonStyle={{ backgroundColor: "transparent" }}
      />
      <Button
        icon={<Icon color={colors.icon} name="user-circle" size={25} />}
        buttonStyle={{ backgroundColor: "transparent" }}
      />
    </View>
  );
}
