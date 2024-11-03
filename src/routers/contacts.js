import { Router } from 'express';
import * as contactsControllers from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
const contactsRouret = Router();

contactsRouret.get('/', ctrlWrapper(contactsControllers.getContactsController));

contactsRouret.get(
  '/:id',
  ctrlWrapper(contactsControllers.getContactsByIdController),
);

export default contactsRouret;
