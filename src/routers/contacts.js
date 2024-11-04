import { Router } from 'express';
import * as contactsControllers from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
const contactsRouret = Router();

contactsRouret.get('/', ctrlWrapper(contactsControllers.getContactsController));

contactsRouret.get(
  '/:id',
  ctrlWrapper(contactsControllers.getContactsByIdController),
);

contactsRouret.post('/', ctrlWrapper(contactsControllers.addContactController));

contactsRouret.patch(
  '/:id',
  ctrlWrapper(contactsControllers.patchContactController),
);

contactsRouret.delete(
  '/:id',
  ctrlWrapper(contactsControllers.deleteContactController),
);
export default contactsRouret;
