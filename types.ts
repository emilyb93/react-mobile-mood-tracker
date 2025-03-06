export type ValidNumberChoiceOrNull =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | null;

export type ValidColour = "red" | "orange" | "yellow" | "green" | "aquamarine";
export type ValidNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type ColourCount = {
  [K in ValidColour]: number;
};

export type RecordObject = {
  colourCount: ColourCount;
  title: string;
  overallCount: number;
};
