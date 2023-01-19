import { ContactItem } from '../ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { selectFilter } from 'redux/filter/filter-selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = () => {
    const fcontacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.trim().toLowerCase());
    });
    return fcontacts.sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    );
  };

  return (
    <List>
      {filterContacts().map(contact => {
        return (
          <Item key={contact.id}>
            <ContactItem contact={contact} />
          </Item>
        );
      })}
    </List>
  );
};
