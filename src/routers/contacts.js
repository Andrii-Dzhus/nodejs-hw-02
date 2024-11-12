import { Router } from 'express';
import * as contactsControllers from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';
import {
  contactAddSchema,
  contactUpdateSchema,
} from '../validation/contacts.js';
import { isValueId } from '../middlewares/isValueId.js';

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(contactsControllers.getContactsController));

contactsRouter.get(
  '/:id',
  isValueId,
  ctrlWrapper(contactsControllers.getContactsByIdController),
);

contactsRouter.post(
  '/',
  validateBody(contactAddSchema),
  ctrlWrapper(contactsControllers.addContactController),
);

contactsRouter.patch(
  '/:id',
  isValueId,
  validateBody(contactUpdateSchema),
  ctrlWrapper(contactsControllers.patchContactController),
);

contactsRouter.delete(
  '/:id',
  isValueId,
  ctrlWrapper(contactsControllers.deleteContactController),
);
export default contactsRouter;
