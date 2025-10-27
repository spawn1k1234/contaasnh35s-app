import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import './Filter.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div style={{ marginBottom: 12 }}>
      <label className="search-label">
        Пошук:
        <input
          value={filter}
          onChange={onChange}
          placeholder="Введіть ім'я..."
        />
      </label>
    </div>
  );
}
