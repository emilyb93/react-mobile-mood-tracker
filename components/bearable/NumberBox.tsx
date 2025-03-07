import { colours } from "@/constants";
import { SetStateAction, useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
type FontColours = keyof typeof colours;

type NumberBoxProps = {
  number: number;
  fontColour: FontColours;
  selectedNumber: number;
  setSelectedNumber: () => void;
};
const NumberBox = ({
  number,
  fontColour,
  selectedNumber,
  setSelectedNumber,
}: NumberBoxProps) => {
  const isSelected = useMemo(() => number === selectedNumber, [selectedNumber]);
  return (
    <View>
      <Shadow
        distance={3} // offset
        startColor="#00000020"
        offset={[5, 8]} // [x,y]
      >
        <TouchableOpacity
          style={[
            styles.box,
            { backgroundColor: isSelected ? colours[fontColour] : "#fff" },
          ]}
          onPress={setSelectedNumber}
        >
          <Text
            style={[
              styles.number,
              { color: isSelected ? "#fff" : colours[fontColour] },
            ]}
          >
            {number}
          </Text>
        </TouchableOpacity>
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 5,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#00000020",
    backgroundColor: "#ffffff",
  },
  number: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },
});

export default NumberBox;
