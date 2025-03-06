import { StyleSheet, View } from "react-native";
import BarWithBubble from "./BarWithBubble";
import { useSelector } from "react-redux";
import { AppStore, useAppSelector } from "@/app/stores/store";

const BarSection = () => {
  const data = useAppSelector((state) => state.record);

  const sortedData = Object.values(data).sort((a, b) =>
    a.overallCount < b.overallCount ? 0 : 1
  );
  return (
    <View style={styles.dataSection}>
      {sortedData.map((data) => {
        const { title, colourCount, overallCount } = data;

        return (
          <BarWithBubble
            key={title}
            title={title}
            values={colourCount}
            overallCount={overallCount}
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
    paddingHorizontal: 20,
  },
});
export default BarSection;
