import MoodScreen from "@/components/screens/MoodScreen";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MoodScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10, flex: 1 },
});

export default App;
