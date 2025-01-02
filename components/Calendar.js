import React, { useState } from 'react';

export default function Calendar({ onSelectDate }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    onSelectDate(date);
  };

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      const date = `2025-01-${i < 10 ? '0' + i : i}`;
      days.push(
        <div
          key={date}
          onClick={() => handleDateClick(date)}
          style={{
            padding: '10px',
            margin: '5px',
            border: '1px solid black',
            cursor: 'pointer',
            backgroundColor: selectedDate === date ? 'lightblue' : 'white',
          }}
        >
          {date}
        </div>
      );
    }
    return days;
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '300px' }}>
      {renderDays()}
    </div>
  );
}
