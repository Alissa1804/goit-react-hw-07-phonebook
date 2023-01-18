import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, Title, MTitle } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
//
export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <MTitle>Contacts</MTitle>
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
};
