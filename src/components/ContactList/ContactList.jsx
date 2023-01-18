import { ContactItem } from '../ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = () => {
    const fcontacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.trim().toLowerCase());
    });
    return fcontacts;
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
