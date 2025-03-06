import { ColourCount, ValidNumber } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialColourCount = {
  red: 0,
  orange: 0,
  yellow: 0,
  green: 0,
  aquamarine: 0,
};
type RecordObject = {
  colourCount: ColourCount;
  title: string;
  overallCount: number;
};
// Initial state
const initialState: {
  [key: string]: RecordObject;
} = {};

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
      const feelings = action.payload.feelings;
      const colour = getColour(number);

      feelings.forEach((feeling: string) => {
        if (!state[feeling]) {
          state[feeling] = {
            colourCount: { ...initialColourCount },
            title: feeling,
            overallCount: 0,
          };
        }

        if (colour) {
          state[feeling]["colourCount"][colour]++;
          state[feeling]["overallCount"]++;
        }
      });
      console.log(state);
    },
  },
});

export const { addRecords } = moodSlice.actions;

export default moodSlice.reducer;
