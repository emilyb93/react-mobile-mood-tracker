import BarSection from "@/components/bearable/BarSection";
import BarWithBubble from "@/components/bearable/BarWithBubble";
import FeelingsEntry from "@/components/bearable/FeelingsEntry";
import FormSection from "@/components/bearable/FormSection";
import MoodEntry from "@/components/bearable/MoodEntry";
import NumberBox from "@/components/bearable/NumberBox";
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
