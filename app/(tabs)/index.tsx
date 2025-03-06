import BarSection from "@/components/BarSection";
import BarWithBubble from "@/components/BarWithBubble";
import FeelingsEntry from "@/components/FeelingsEntry";
import FormSection from "@/components/FormSection";
import MoodEntry from "@/components/MoodEntry";
import NumberBox from "@/components/NumberBox";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MoodScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FormSection />
      <BarSection />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10, flex: 1 },
});

export default MoodScreen;
