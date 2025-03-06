import { StyleSheet, View } from "react-native";
import NumberBox from "./NumberBox";
import { useState } from "react";
import { ValidNumberChoiceOrNull } from "@/types";
type MoodEntryProps = {
  selectedNumber: number;
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
      <View>
        <NumberBox
          number={1}
          fontColour={"red"}
          selectedNumber={selectedNumber as number}
          setSelectedNumber={changeSelectedNumberTo(1)}
        />
        <NumberBox
          number={2}
          fontColour={"red"}
          selectedNumber={selectedNumber as number}
          setSelectedNumber={changeSelectedNumberTo(2)}
        />
      </View>
      <View>
        <NumberBox
          number={3}
          fontColour={"orange"}
          selectedNumber={selectedNumber as number}
          setSelectedNumber={changeSelectedNumberTo(3)}
        />
        <NumberBox
          number={4}
          fontColour={"orange"}
          selectedNumber={selectedNumber as number}
          setSelectedNumber={changeSelectedNumberTo(4)}
        />
      </View>
      <View>
        <NumberBox
          number={5}
          fontColour={"yellow"}
          selectedNumber={selectedNumber as number}
          setSelectedNumber={changeSelectedNumberTo(5)}
        />
        <NumberBox
          number={6}
          fontColour={"yellow"}
          selectedNumber={selectedNumber as number}
          setSelectedNumber={changeSelectedNumberTo(6)}
        />
      </View>
      <View>
        <NumberBox
          number={7}
          fontColour={"green"}
          selectedNumber={selectedNumber as number}
          setSelectedNumber={changeSelectedNumberTo(7)}
        />
        <NumberBox
          number={8}
          fontColour={"green"}
          selectedNumber={selectedNumber as number}
          setSelectedNumber={changeSelectedNumberTo(8)}
        />
      </View>
      <View>
        <NumberBox
          number={9}
          fontColour={"aquamarine"}
          selectedNumber={selectedNumber as number}
          setSelectedNumber={changeSelectedNumberTo(9)}
        />
        <NumberBox
          number={10}
          fontColour={"aquamarine"}
          selectedNumber={selectedNumber as number}
          setSelectedNumber={changeSelectedNumberTo(10)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  moodContainer: {
    flex: 1,
    flexDirection: "row",
  },
});

export default MoodEntry;
