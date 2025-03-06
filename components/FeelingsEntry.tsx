import { Pressable, StyleSheet, Text, View } from "react-native";

const FeelingsEntry = () => {
  const feelings = ["Meh", "Content", "Happy", "Frustrated"];

  return (
    <>
      <View style={styles.feelingsContainer}>
        {feelings.map((feeling) => {
          return (
            <View style={styles.textContainer}>
              <Text style={styles.feelingsText}>{feeling}</Text>;
            </View>
          );
        })}
      </View>
      <Pressable style={styles.doneButton}>
        <Text style={styles.doneText}>Done</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  feelingsText: {
    fontWeight: "600",
  },
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
  },
  feelingsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  textContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 3,
    marginHorizontal: 2,
    backgroundColor: "rgb(219, 245, 245)",
    borderRadius: 15,
    borderWidth: 1,

    alignSelf: "flex-start",
  },
});
export default FeelingsEntry;
