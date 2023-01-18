import PropTypes from 'prop-types';
import { Button, P, PN, Div } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import Avatar from 'react-avatar';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Div>
        <Avatar
          name={name}
          size="35"
          round={true}
          color="#bdd4f1"
          fgColor="#252525"
        />
      </Div>
      <PN>{name}</PN>
      <P>{number}</P>
      <Button
        onClick={() =>
          dispatch(deleteContact(id)) &
          Notiflix.Notify.info(`Contact with name ${name} is deleted`)
        }
      >
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
