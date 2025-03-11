import { StyleSheet, View } from "react-native";
import BarWithBubble from "@/components/molecules/BarWithBubble";
import { useSelector } from "react-redux";
import { AppStore, useAppSelector } from "@/app/stores/store";
import { useMemo } from "react";

const BarSection = () => {
  const { highestCount, records, orderedData } = useAppSelector(
    (state) => state.record
  );

  return (
    <View style={styles.dataSection}>
      {orderedData.map((record) => {
        return (
          <BarWithBubble
            key={record.title}
            record={record}
            highestCount={highestCount}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dataSection: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
  },
});
export default BarSection;
