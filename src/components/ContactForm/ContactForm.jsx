import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import './ContactForm.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();

    if (!name || !phone) return;

    dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <form
      className="formsa"
      onSubmit={handleSubmit}
      style={{ marginBottom: 12 }}
    >
      <div className="divinp">
        <input placeholder="Ім'я:" name="name" type="text" />
      </div>
      <div className="divinp">
        <input placeholder="Телефон:" name="phone" type="text" />
      </div>
      <button type="submit">Додати контакт</button>
    </form>
  );
}
