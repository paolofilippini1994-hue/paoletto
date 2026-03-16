import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

function MyCalendar() {
  const [value, setValue] = useState(new Date());

  const giorni = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  const mesi = [
    'gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno',
    'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre',
  ];

  const label = `${giorni[value.getDay()]} ${value.getDate()} ${mesi[value.getMonth()]} ${value.getFullYear()}`;

  return (
    <div className="cal-wrapper">
      <Calendar
        onChange={setValue}
        value={value}
        locale="it-IT"
      />
      <div className="cal-selected">
        📅 {label}
      </div>
    </div>
  );
}

export default MyCalendar;
