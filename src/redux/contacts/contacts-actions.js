import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addNewContact = createAction(
  'contacts/addcontact',
  ({ name, number }) => ({
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  }),
);
export const deleteContact = createAction('contacts/delete');
