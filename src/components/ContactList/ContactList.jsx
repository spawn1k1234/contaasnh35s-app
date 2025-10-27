import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { getContacts, getFilter } from '../../redux/selectors';
import './ContactList.css';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter).toLowerCase();

  const visible = contacts.filter(c => c.name.toLowerCase().includes(filter));

  if (!visible.length) {
    return <p>Немає контактів.</p>;
  }

  return (
    <div className="contact-list-container">
      {visible.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}
