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
import { getColour, getHighestRecord } from "./utils";
const { testRecordData, testOrderedData, testHighestCount } = testData;
// Initial state
const initialState: {
  records: {
    [key: string]: RecordObject;
  };
  highestCount: number;
} = {
  highestCount: testHighestCount,
  records: testRecordData,
};

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
    },
  },
});

export const { addRecords } = moodSlice.actions;

export default moodSlice.reducer;
