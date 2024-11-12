const sortOrderList = ['asc', 'desc'];

export const parseSortParams = ({ sortBy, sortOrder }, sortByList) => {
  const parseSortOrder = sortOrderList.includes(sortOrder) ? sortOrder : 'asc';
  const parseSortBy = sortByList.includes(sortBy) ? sortBy : '_id';

  return {
    sortBy: parseSortBy,
    sortOrder: parseSortOrder,
  };
};
