import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { fetchContacts } from './redux/operations';
import { getIsLoading, getError } from './redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (!effectRef.current && window.VANTA) {
      effectRef.current = window.VANTA.BIRDS({
        el: vantaRef.current,
        backgroundColor: 0x0a0a0a,
        color1: 0xcab1b1,
        color2: 0x0,
        colorMode: 'variance',
        birdSize: 1.5,
        wingSpan: 10,
        quantity: 8,
        speedLimit: 6,
        mouseControls: true,
        touchControls: true,
        minHeight: 200,
        minWidth: 200,
      });
    }
    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div className="app" style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        ref={vantaRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
      <div className="flexdivs">
        <div className="titls">
          <h1>Книга контактів</h1>
          <p>
            © 2025 | GitHub:{' '}
            <a
              href="https://github.com/spawn1k1234"
              target="_blank"
              rel="noopener noreferrer"
            >
              spawn1k1234
            </a>
          </p>
        </div>
        <div className="blurd">
          <ContactForm />
          <Filter />
          {isLoading && !error && <b>Завантаження...</b>}
          {error && <p style={{ color: 'red' }}>Помилка: {error}</p>}
          <ContactList />
        </div>
      </div>
    </div>
  );
}
