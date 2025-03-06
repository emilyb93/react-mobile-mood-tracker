import { Pressable, StyleSheet, Text, View } from "react-native";

type FeelingButtonProps = {
  id: number;
  label: string;
  isSelected: boolean;
  handleFeelingsPress: (label: string) => void;
};

const FeelingButton = ({
  id,
  label,
  handleFeelingsPress,
  isSelected,
}: FeelingButtonProps) => {
  return (
    <Pressable
      onPress={() => {
        handleFeelingsPress(label);
      }}
      key={id}
      style={[
        styles.textContainer,
        isSelected
          ? { backgroundColor: "rgb(131, 213, 213)" }
          : { backgroundColor: "rgb(246, 246, 246)" },
      ]}
    >
      <Text style={styles.feelingsText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 3,
    marginHorizontal: 2,

    borderRadius: 15,
    borderWidth: 1,

    alignSelf: "flex-start",
  },
  feelingsText: {
    fontWeight: "600",
  },
});
export default FeelingButton;
