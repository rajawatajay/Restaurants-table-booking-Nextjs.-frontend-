"use client"
import { useState } from 'react';
import Calendar from '../components/Calendar';
import styles from '../styles/Home.css';

export default function Home() {
  const [form, setForm] = useState({
    date: '',
    time: '',
    guests: '',
    name: '',
    contact: ''
  });

  const handleDateSelect = (date) => {
    setForm({ ...form, date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (data.success) {
      alert('Booking successful!');
    } else {
      alert('Error: ' + data.message);
    }
  };

  return (
    <>
      <Calendar onSelectDate={handleDateSelect} />
      <form onSubmit={handleSubmit}>
        <input type="time" onChange={(e) => setForm({ ...form, time: e.target.value })} required />
        <input type="number" placeholder="Number of Guests" onChange={(e) => setForm({ ...form, guests: e.target.value })} required />
        <input type="text" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input type="tel" placeholder="Contact" onChange={(e) => setForm({ ...form, contact: e.target.value })} required />
        <button type="submit">Book</button>
      </form>
    </>
  );
}
