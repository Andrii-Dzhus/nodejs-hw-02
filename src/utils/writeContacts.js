import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'node:fs/promises';

export const writeContacts = (contacts) =>
  writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
