import { ColourCount } from "@/types";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

type BarWithBubbleProps = {
  title: string;
  values: ColourCount;
  overallCount: number;
};
const BarWithBubble = ({ title, values, overallCount }: BarWithBubbleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bar}>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>{overallCount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bar: {
    height: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 10,
  },
  bubble: {
    width: 60,
    height: 40,
    borderRadius: 17,
    borderBlockColor: "#000000",
    borderWidth: 1,
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
