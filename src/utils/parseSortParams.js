const sortOrderList = ['asc', 'desc'];

export const parseSortParams = ({ sortBy, sortOrder }, sortByList) => {
  const parseSortOrder = sortOrderList.includes(sortOrder)
    ? sortOrder
    : sortOrderList;
  const parseSortBy = sortByList.includes(sortBy) ? sortBy : '_id';

  return {
    sortBy: parseSortBy,
    sortOrder: parseSortOrder,
  };
};
