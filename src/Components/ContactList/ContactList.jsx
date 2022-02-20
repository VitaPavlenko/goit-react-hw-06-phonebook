import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

const filterInputHandler = (filter, contact) =>
  contact.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contact = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const contacts = filterInputHandler(filter, contact);
  return (
    <ul>
      {contacts.map(
        ({ id, name, number }) =>
          contacts && (
            <li key={id}>
              {name}
              {number}
              <button onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          )
      )}
    </ul>
  );
};

export default ContactList;
