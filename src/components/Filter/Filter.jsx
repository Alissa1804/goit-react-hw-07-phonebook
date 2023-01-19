import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filter/filterSlice';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filter-selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterChange = event => {
    dispatch(filterContact(event.target.value));
  };

  const filter = useSelector(selectFilter);

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        onChange={filterChange}
      />
    </Label>
  );
};
