import BarSection from "@/components/organisms/BarSection";
import BarWithBubble from "@/components/molecules/BarWithBubble";
import FeelingsEntry from "@/components/molecules/FeelingsEntry";
import FormSection from "@/components/organisms/FormSection";
import MoodEntry from "@/components/molecules/MoodEntry";
import NumberBox from "@/components/atoms/NumberBox";
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
