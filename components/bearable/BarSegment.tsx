import { ValidColour } from "@/types";
import React from "react";
import { View, StyleSheet } from "react-native";
import { colours } from "@/constants";

type BarSegmentProps = {
  colour: ValidColour;
  flexValue: number;
};

const BarSegment = ({ colour, flexValue }: BarSegmentProps) => {
  return (
    <View
      style={[
        styles.segment,
        { flex: flexValue, backgroundColor: colours[colour] },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  segment: {
    height: "100%",
  },
});

export default BarSegment;
