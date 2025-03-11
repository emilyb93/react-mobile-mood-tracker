import { RecordObject, ValidNumber } from "@/types";

export function getColour(number: ValidNumber) {
  if (number === 1 || number === 2) return "red";
  if (number === 3 || number === 4) return "orange";
  if (number === 5 || number === 6) return "yellow";
  if (number === 7 || number === 8) return "green";
  if (number === 9 || number === 10) return "aquamarine";
}

export function getHighestRecord(records: RecordObject[]): number {
  if (records.length === 0) return 0;
  const overallCounts = records.map((x) => x.overallCount);
  overallCounts.sort((a, b) => a - b);
  return overallCounts[overallCounts.length - 1];
}
