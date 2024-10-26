import ContactCollection from '../db/models/contact.js';

export const getContacts = () => ContactCollection.find();
