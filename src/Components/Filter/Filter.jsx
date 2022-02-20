import { useSelector, useDispatch } from 'react-redux';
import { handleFilter } from 'redux/actions';
const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  // setFilter(event.currentTarget.value);

  return (
    <label>
      <p> Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={event => dispatch(handleFilter(event.target.value))}
      ></input>
    </label>
  );
};

export default Filter;
