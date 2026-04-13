import { useState } from 'react';
import './App.css';
import Title from './title'; 
import Mark from './mark';
import Frase from './frase';
import Orologio from "./orologio";
import MyCalendar from './calendar';
import MyCarousel from './MyCarousel';

function App() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <div className="app-container">
      <Title>ciao friday</Title>
      <h3 style={{ textAlign: "center" }}>Ciao</h3>
      <Frase>
        Sono <Mark backgroundColor="lightgreen">Evidenziato</Mark>
      </Frase>
      <Frase>ora no</Frase>
      <Frase>Ora sono le <Orologio /> Grazie e arrivederci.</Frase>
    

      <div className="toggle-controls">
        <button
          type="button"
          className="toggle-button"
          onClick={() => setShowCalendar((current) => !current)}
        >
          {showCalendar ? 'Nascondi calendario' : 'Mostra calendario'}
        </button>
        <button
          type="button"
          className="toggle-button"
          onClick={() => setShowCarousel((current) => !current)}
        >
          {showCarousel ? 'Nascondi carousel' : 'Mostra carousel'}
        </button>
      </div>

      <div className="toggle-section">
        {showCalendar && <MyCalendar />}
        {showCarousel && (
          <>
            <h1 className="text-center mt-3">Il mio carousel</h1>
            <MyCarousel />
          </>
        )}
      </div>
    </div>
  );
}

console.log("ciao Friday 🔥");
export default App;