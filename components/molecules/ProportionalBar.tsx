import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BarSegment from "../atoms/BarSegment";
import { ColourCount, RecordObject, ValidColour } from "@/types";

type ProportionalBarProps = {
  record: RecordObject;
};

const ProportionalBar = ({ record }: ProportionalBarProps) => {
  const { colourCount, overallCount, title } = record;
  const orderedColours = Object.entries(colourCount).sort(
    (a, b) => a[1] - b[1]
  );

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        {orderedColours.map(([colour, count]) => {
          // [green,5] [red, 3] etc
          if (count > 0) {
            // creating proportional length via flex
            const flexValue = count / overallCount;
            return (
              <BarSegment
                key={colour}
                colour={colour as ValidColour}
                flexValue={flexValue}
              />
            );
          }
          return null;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 8,
  },
  container: {
    width: "85%",
    height: "60%",
    justifyContent: "center",
  },

  bar: {
    height: 16,
    flexDirection: "row",
    borderRadius: 5,
    overflow: "hidden",
  },
});

export default ProportionalBar;
