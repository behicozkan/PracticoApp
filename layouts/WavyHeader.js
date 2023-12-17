import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Text } from "react-native";
export default function WavyHeader({
  customStyles,
  customHeight,
  customTop,
  customBgColor,
  customWavePattern,
  headerText,
}) {
  return (
    <View style={customStyles}>
      <View
        style={{
          backgroundColor: customBgColor,
          height: customHeight,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 30,
          }}
        >
          {headerText}
        </Text>
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: customTop }}
        >
          <Path fill={customBgColor} d={customWavePattern} />
        </Svg>
      </View>
    </View>
  );
}
