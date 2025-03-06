import { ColourCount, RecordObject, ValidNumber } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialColourCount = {
  red: 0,
  orange: 0,
  yellow: 0,
  green: 0,
  aquamarine: 0,
};

import testData from "./testData";
const { testRecordData, testOrderedData, testHighestCount } = testData;
// Initial state
const initialState: {
  records: {
    [key: string]: RecordObject;
  };
  highestCount: number;
  orderedData: RecordObject[];
} = {
  highestCount: testHighestCount,
  records: testRecordData,
  orderedData: testOrderedData,
};

function getColour(number: ValidNumber) {
  if (number === 1 || number === 2) return "red";
  if (number === 3 || number === 4) return "orange";
  if (number === 5 || number === 6) return "yellow";
  if (number === 7 || number === 8) return "green";
  if (number === 9 || number === 10) return "aquamarine";
}

const moodSlice = createSlice({
  name: "MoodRecords",
  initialState,
  reducers: {
    addRecords: (state, action) => {
      const number = action.payload.number as ValidNumber;
      const feelings: string[] = action.payload.feelings;
      const colour = getColour(number);

      feelings.forEach((feeling: string) => {
        if (!state.records[feeling]) {
          state.records[feeling] = {
            colourCount: { ...initialColourCount },
            title: feeling,
            overallCount: 0,
          };
        }

        const stateRecord = state.records[feeling];
        if (colour) {
          stateRecord["colourCount"][colour]++;
          stateRecord["overallCount"]++;
        }
      });
      // calculate the highest record for the styling calculations
      const highestCount = getHighestRecord(Object.values(state.records));
      state.highestCount = highestCount;

      // sort once records are updated
      state.orderedData = Object.values(state.records).sort(
        (a, b) => b.overallCount - a.overallCount
      );
    },
  },
});

function getHighestRecord(records: RecordObject[]): number {
  if (records.length === 0) return 0;
  const overallCounts = records.map((x) => x.overallCount);
  overallCounts.sort((a, b) => a - b);
  return overallCounts[overallCounts.length - 1];
}

export const { addRecords } = moodSlice.actions;

export default moodSlice.reducer;
