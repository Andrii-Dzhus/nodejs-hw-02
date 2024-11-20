import ContactCollection from '../db/models/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getContacts = async ({
  page = 1,
  perPage = 10,
  sortBy = '_id',
  sortOrder = 'asc',
  filter = {},
}) => {
  const query = ContactCollection.find();

  if (filter.minReleaseYear) {
    query.where('releaseYear').gte(filter.minReleaseYear);
  }
  if (filter.maxReleaseYear) {
    query.where('releaseYear').lte(filter.maxReleaseYear);
  }
  if (filter.userId) {
    query.where('userId').equals(filter.userId);
  }

  const totalItems = await ContactCollection.find()
    .merge(query)
    .countDocuments();

  const skip = (page - 1) * perPage;
  const data = await query
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });

  const paginationData = calculatePaginationData({ totalItems, page, perPage });

  return {
    data,
    ...paginationData,
  };
};

// export const getContacts = async ({
//   page = 1,
//   perPage = 10,
//   sortBy = '_id',
//   sortOrder = 'asc',
//   filter = {},
// }) => {
//   const skip = (page - 1) * perPage;
//   const data = await ContactCollection.find({ userId })
//     .skip(skip)
//     .limit(perPage)
//     .sort({ [sortBy]: sortOrder });

//   const totalItems = await ContactCollection.countDocuments({ userId });
//   const paginationData = calculatePaginationData({ totalItems, page, perPage });

//   return {
//     data,
//     ...paginationData,
//   };
// };

export const getContactById = (id) => ContactCollection.findById(id);

export const addContact = (payload) => ContactCollection.create(payload);

export const updateContact = async ({ _id, payload, options = {} }) => {
  const rawResult = await ContactCollection.findOneAndUpdate({ _id }, payload, {
    ...options,
    includeResultMetadata: true,
  });
  if (!rawResult || !rawResult.value) return null;

  return {
    data: rawResult.value,
    isNew: Boolean(rawResult.lastErrorObject.upserted),
  };
};

export const deleteContact = (filter) =>
  ContactCollection.findOneAndDelete(filter);
