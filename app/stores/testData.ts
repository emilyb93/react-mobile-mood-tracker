const testOrderedData = [
  {
    colourCount: { aquamarine: 0, green: 0, orange: 5, red: 3, yellow: 1 },
    overallCount: 9,
    title: "Meh",
  },
  {
    colourCount: { aquamarine: 2, green: 1, orange: 0, red: 1, yellow: 2 },
    overallCount: 6,
    title: "Content",
  },
  {
    colourCount: { aquamarine: 2, green: 2, orange: 1, red: 0, yellow: 0 },
    overallCount: 5,
    title: "Happy",
  },
  {
    colourCount: { aquamarine: 0, green: 0, orange: 1, red: 1, yellow: 0 },
    overallCount: 2,
    title: "Frustrated",
  },
];

const testRecordData = {
  Content: {
    colourCount: { aquamarine: 2, green: 1, orange: 0, red: 1, yellow: 2 },
    overallCount: 6,
    title: "Content",
  },
  Frustrated: {
    colourCount: { aquamarine: 0, green: 0, orange: 1, red: 1, yellow: 0 },
    overallCount: 2,
    title: "Frustrated",
  },
  Happy: {
    colourCount: { aquamarine: 2, green: 2, orange: 1, red: 0, yellow: 0 },
    overallCount: 5,
    title: "Happy",
  },
  Meh: {
    colourCount: { aquamarine: 0, green: 0, orange: 5, red: 3, yellow: 1 },
    overallCount: 9,
    title: "Meh",
  },
};

const testHighestCount = 9;
export default { testOrderedData, testRecordData, testHighestCount };
