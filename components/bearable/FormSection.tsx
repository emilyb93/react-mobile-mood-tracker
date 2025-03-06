import { StyleSheet, Text, View } from "react-native";
import MoodEntry from "./MoodEntry";
import FeelingsEntry from "./FeelingsEntry";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecords } from "@/app/stores/moodSlice";
import { ValidNumber, ValidNumberChoiceOrNull } from "@/types";

const FormSection = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  function toggleForm(option: boolean) {
    setShowForm(option);
  }
  const [selectedNumber, setSelectedNumber] =
    useState<ValidNumberChoiceOrNull>(null);
  const [selectedFeelings, setSelectedFeelings] = useState<string[]>([]);

  const dispatch = useDispatch();

  const handleAddRecord = () => {
    if (selectedNumber && selectedFeelings.length > 0) {
      dispatch(
        addRecords({ number: selectedNumber, feelings: selectedFeelings })
      );
      setSelectedNumber(null);
      setSelectedFeelings([]);
    }
  };

  return (
    <View style={styles.formSection}>
      <Text style={styles.headerText}>How are you feeling?</Text>
      <View style={styles.wrapper}>
        <MoodEntry
          toggleForm={toggleForm}
          setSelectedNumber={setSelectedNumber}
          selectedNumber={selectedNumber}
        />
      </View>
      {showForm === true ? (
        <FeelingsEntry
          selectedFeelings={selectedFeelings}
          setSelectedFeelings={setSelectedFeelings}
          handleAddRecord={handleAddRecord}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 30,
    flex: 1,
  },
  headerText: { textAlign: "center", fontWeight: "bold", marginBottom: 10 },
  formSection: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
  },
});

export default FormSection;
