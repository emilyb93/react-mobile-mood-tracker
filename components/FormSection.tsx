import { StyleSheet, Text, View } from "react-native";
import MoodEntry from "./MoodEntry";
import FeelingsEntry from "./FeelingsEntry";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecords } from "@/app/stores/moodSlice";

const FormSection = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  function toggleForm(option: boolean) {
    setShowForm(option);
  }
  const [selectedNumber, setSelectedNumber] = useState<number | null>();
  const [selectedFeelings, setSelectedFeelings] = useState<string[]>([]);

  const dispatch = useDispatch();

  const handleAddRecord = () => {
    console.log(selectedNumber, selectedFeelings);
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
      <Text>How are you feeling?</Text>
      <MoodEntry
        toggleForm={toggleForm}
        setSelectedNumber={setSelectedNumber}
        selectedNumber={selectedNumber}
      />
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
  formSection: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
  },
});

export default FormSection;
