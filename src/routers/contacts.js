import { Router } from 'express';
import * as contactsControllers from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';
import {
  contactAddSchema,
  contactUpdateSchema,
} from '../validation/contacts.js';
import { isValueId } from '../middlewares/isValidId.js';

const contactsRouret = Router();

contactsRouret.get('/', ctrlWrapper(contactsControllers.getContactsController));

contactsRouret.get(
  '/:id',
  isValueId,
  ctrlWrapper(contactsControllers.getContactsByIdController),
);

contactsRouret.post(
  '/',
  validateBody(contactAddSchema),
  ctrlWrapper(contactsControllers.addContactController),
);

contactsRouret.patch(
  '/:id',
  isValueId,
  validateBody(contactUpdateSchema),
  ctrlWrapper(contactsControllers.patchContactController),
);

contactsRouret.delete(
  '/:id',
  isValueId,
  ctrlWrapper(contactsControllers.deleteContactController),
);
export default contactsRouret;
