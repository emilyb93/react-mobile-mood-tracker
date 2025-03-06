import { ColourCount, RecordObject } from "@/types";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProportionalBar from "./ProportionalBar";

type BarWithBubbleProps = {
  record: RecordObject;
  highestCount: number;
};
const BarWithBubble = ({ record, highestCount }: BarWithBubbleProps) => {
  const FULL_LENGTH = 300;
  const { overallCount, title } = record;

  const proportionalLength = (overallCount / highestCount) * FULL_LENGTH;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.barContainer}>
        <ProportionalBar record={record} />
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>{overallCount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  container: {
    marginVertical: 10,
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bar: {
    height: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  bubble: {
    width: 40,
    height: 40,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  bubbleText: {
    color: "#000000",
    fontWeight: "bold",
  },
});

export default BarWithBubble;
