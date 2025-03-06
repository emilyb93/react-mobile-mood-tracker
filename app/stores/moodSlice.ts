import { createSlice } from "@reduxjs/toolkit";

type ValidColour = "red" | "orange" | "yellow" | "green" | "aquamarine";
type ValidNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
// Initial state
const initialState: {
  [key: string]: ValidColour[];
} = {};

function getColour(number: number) {
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
          state[feeling] = [];
        }
        state[feeling].push(colour as ValidColour);
      });
      console.log(state);
    },
  },
});

export const { addRecords } = moodSlice.actions;

export default moodSlice.reducer;
