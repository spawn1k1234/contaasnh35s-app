import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className="contact">
      <div>
        <strong>{contact.name}</strong>
        <div>{contact.phone}</div>
      </div>
      <div className="controls">
        <button onClick={handleDelete}>Видалити</button>
      </div>
    </div>
  );
}
