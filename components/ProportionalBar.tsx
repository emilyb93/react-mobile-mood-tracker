import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BarSegment from "./BarSegment";
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
    marginBottom: 16,

    flex: 1,
  },

  bar: {
    height: 20,
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default ProportionalBar;
