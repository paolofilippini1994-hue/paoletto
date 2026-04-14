import React, { useState } from 'react';
import './App.css';
import Title from './title'; 
import Mark from './mark';
import Frase from './frase';
import Orologio from "./orologio";
import MyCalendar from './calendar';
import MyCarousel from './MyCarousel';

function App() {
    // Counter automatico che va da solo nella console
    React.useEffect(() => {
      let autoCounter = 0;
      const interval = setInterval(() => {
        autoCounter++;
        console.log('AutoCounter:', autoCounter);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(prev => {
      const newValue = prev + 1;
      console.log('Counter:', newValue);
      return newValue;
    });
  };

  const handleDecrement = () => {
    setCounter(prev => {
      const newValue = prev - 1;
      console.log('Counter:', newValue);
      return newValue;
    });
  };

  return (
    <div className="app-container">
      <Title>ciao friday</Title>
      <h3 style={{ textAlign: "center" }}>Ciao</h3>
      <Frase>
        Sono <Mark backgroundColor="lightgreen">Evidenziato</Mark>
      </Frase>
      <Frase>ora no</Frase>
      <Frase>Ora sono le <Orologio /> Grazie e arrivederci.</Frase>

      {/* Counter Section */}
      <div style={{ margin: '20px', textAlign: 'center' }}>
        <h2>Counter: {counter}</h2>
        <button onClick={handleDecrement} style={{ marginRight: '10px' }}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>

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