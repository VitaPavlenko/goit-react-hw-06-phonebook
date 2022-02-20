import { combineReducers } from 'redux';
import TYPES from './types';
// contacts: {
//   items: [],
//   filter: '',
// },
const contact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = (state = contact, action) => {
  switch (action.type) {
    case TYPES.ADD:
      return [...state, action.payload];

    case TYPES.DELETE:
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case TYPES.FILTER:
      return action.payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;

// const filterReducer = createReducer('', {
//   [filterContacts]: (state, action) => action.payload,
//   // state.filter(el =>
//   //   el.id.toLowerCase().includes(action.payload.toLowerCase())
//   // ),
// });
