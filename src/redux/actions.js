import TYPES from './types';
const addContact = contact => ({
  type: TYPES.ADD,
  payload: contact,
});

const deleteContact = id => ({
  type: TYPES.DELETE,
  payload: id,
});

const handleFilter = value => ({
  type: TYPES.FILTER,
  payload: value,
});

export { addContact, deleteContact, handleFilter };
