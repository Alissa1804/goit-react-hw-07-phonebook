import PropTypes from 'prop-types';
import { Button, P, PN, Div, EButton } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import Avatar from 'react-avatar';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { useState } from 'react';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';

export const ContactItem = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();
  const [contactToUpdate, setContactToUpdate] = useState(null);
  const contacts = useSelector(selectContacts);

  const showUpdateForm = contactId => {
    const contact = contacts.find(({ id }) => id === contactId);
    setContactToUpdate(contact);
  };

  const closeForm = () => {
    setContactToUpdate(null);
  };

  return (
    <>
      {!contactToUpdate && (
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
          <P>{phone}</P>
          <Button
            onClick={() =>
              dispatch(deleteContact(id)) &
              Notiflix.Notify.info(`Contact with name ${name} was deleted`)
            }
          >
            Delete
          </Button>
          <EButton onClick={() => showUpdateForm(id)}>Edit</EButton>
        </>
      )}
      {contactToUpdate && contactToUpdate.id === id && (
        <UpdateForm contactToUpdate={contactToUpdate} closeForm={closeForm} />
      )}
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ),
};
