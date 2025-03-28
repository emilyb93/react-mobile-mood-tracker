import { Pressable, StyleSheet, Text, View } from "react-native";
import FeelingButton from "../atoms/FeelingButton";
import feelings from "@/constants/Feelings";

type FeelingsEntryProps = {
  handleAddRecord: () => void;
  selectedFeelings: string[];
  setSelectedFeelings: React.Dispatch<React.SetStateAction<string[]>>;
};

const FeelingsEntry = ({
  handleAddRecord,
  selectedFeelings,
  setSelectedFeelings,
}: FeelingsEntryProps) => {
  function handleFeelingsPress(feeling: string) {
    setSelectedFeelings((currFeelings) => {
      const copyFeelings = [...currFeelings];
      const feelingIndex = copyFeelings.indexOf(feeling);
      if (feelingIndex === -1) {
        copyFeelings.push(feeling);
      } else {
        copyFeelings.splice(feelingIndex, 1);
      }

      return copyFeelings;
    });
  }

  return (
    <>
      <View style={styles.feelingsContainer}>
        {feelings.map(({ id, label }) => {
          return (
            <FeelingButton
              key={id}
              isSelected={selectedFeelings.indexOf(label) !== -1}
              handleFeelingsPress={handleFeelingsPress}
              id={id}
              label={label}
            />
          );
        })}
      </View>
      <Pressable onPress={handleAddRecord} style={styles.doneButton}>
        <Text style={styles.doneText}>Done</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  doneText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 30,
    alignSelf: "center",
  },
  doneButton: {
    width: 300,
    height: 50,
    backgroundColor: "#3BB7B0",
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
    borderColor: "#19345D",
    borderWidth: 1,
  },
  feelingsContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
});
export default FeelingsEntry;
