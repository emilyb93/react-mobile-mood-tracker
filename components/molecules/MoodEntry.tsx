import { StyleSheet, View } from "react-native";
import NumberBox from "../atoms/NumberBox";
import { useState } from "react";
import { ValidNumber, ValidNumberChoiceOrNull } from "@/types";
type MoodEntryProps = {
  selectedNumber: ValidNumberChoiceOrNull;
  setSelectedNumber: React.Dispatch<
    React.SetStateAction<ValidNumberChoiceOrNull>
  >;
  toggleForm: (option: boolean) => void;
};

const MoodEntry = ({
  toggleForm,
  setSelectedNumber,
  selectedNumber,
}: MoodEntryProps) => {
  function changeSelectedNumberTo(number: ValidNumberChoiceOrNull) {
    return () => {
      toggleForm(true);
      setSelectedNumber(number);
    };
  }
  return (
    <View style={styles.moodContainer}>
      <View style={styles.rowContainer}>
        {[1, 3, 5, 7, 9].map((number) => {
          return (
            <NumberBox
              number={number as ValidNumber}
              selectedNumber={selectedNumber as number}
              setSelectedNumber={changeSelectedNumberTo(number as ValidNumber)}
            />
          );
        })}
      </View>
      <View style={styles.rowContainer}>
        {[2, 4, 6, 8, 10].map((number) => {
          return (
            <NumberBox
              number={number as ValidNumber}
              selectedNumber={selectedNumber as number}
              setSelectedNumber={changeSelectedNumberTo(number as ValidNumber)}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  moodContainer: {
    flexDirection: "column",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
  },
});

export default MoodEntry;
