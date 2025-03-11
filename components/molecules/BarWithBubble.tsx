import { ColourCount, RecordObject } from "@/types";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProportionalBar from "./ProportionalBar";

type BarWithBubbleProps = {
  record: RecordObject;
  highestCount: number;
};
const BarWithBubble = ({ record, highestCount }: BarWithBubbleProps) => {
  const { overallCount, title } = record;

  const proportionalLength = (overallCount / highestCount) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.barContainer, { width: `${proportionalLength}%` }]}>
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
    height: 40,
  },
  container: {
    marginVertical: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bar: {
    height: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  bubble: {
    marginLeft: -5,
    width: 60,
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
    fontWeight: "900",
    fontSize: 18,
  },
});

export default BarWithBubble;
