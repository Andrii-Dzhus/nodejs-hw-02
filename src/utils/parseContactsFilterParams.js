const parseNumber = (number) => {
  if (typeof number !== 'string') return;

  const parsedNumber = parseInt(number);
  if (Number.isNaN(number)) return;

  return parsedNumber;
};

export const parseContactsFilterParams = ({
  minReleaseYear,
  maxReleaseYear,
}) => {
  const parsedMinReleaseYear = parseNumber(minReleaseYear);
  const parsedMaxReleaseYear = parseNumber(maxReleaseYear);

  return {
    minReleaseYear: parsedMinReleaseYear,
    maxReleaseYear: parsedMaxReleaseYear,
  };
};
