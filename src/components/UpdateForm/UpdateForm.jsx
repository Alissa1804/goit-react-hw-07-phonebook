import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contacts-operations';
import { useState } from 'react';
import Notiflix from 'notiflix';
import { Input, Button, Form } from './UpdateForm.styled';

export const UpdateForm = ({ closeForm, contactToUpdate }) => {
  const [name, setName] = useState(contactToUpdate.name);
  const [phone, setPhone] = useState(contactToUpdate.phone);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      updateContact({
        ...contactToUpdate,
        name,
        phone,
      })
    );
    closeForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name:
        <Input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Number:
        <Input type="tel" name="phone" value={phone} onChange={handleChange} />
      </label>
      <Button
        onClick={() => {
          Notiflix.Notify.info(`Contact with name ${name} was edited`);
        }}
      >
        Save
      </Button>
    </Form>
  );
};
