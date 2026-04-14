import React, { useState } from 'react';
import './App.css';
import Title from './title'; 
import Mark from './mark';
import Frase from './frase';
import Orologio from "./orologio";
import MyCalendar from './calendar';
import MyCarousel from './MyCarousel';
import Card from "./Card"



function App() {
      const [showGrid, setShowGrid] = useState(false);
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
    const [prova, setProva] = useState(1)

  React.useEffect(() => {
    console.log("Prova cambiata:", prova);
  }, [prova]);

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
    const cards = [
      {
        titolo: "Iron Man",
        immagine: "https://playcontestofchampions.com/wp-content/uploads/2023/04/champion-iron-man-infinity-war.webp",
        colore: "#e62429"
      },
      {
        titolo: "Captain America",
        immagine: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_com_crd_03.jpg",
        colore: "#174785"
      },
      {
        titolo: "Thor",
        immagine: "https://www.bestmovie.it/wp-content/uploads/2025/12/thor-avengers-doomsday.jpg",
        colore: "#b7b7b7"
      },
      {
        titolo: "Hulk",
        immagine: "https://static.sky.it/editorialimages/1ff2e3f70d2ae39f0f63ee8889652f907a525232/static/contentimages/original/sezioni/cinema/news/2019/05/07/hulk.jpg",
        colore: "#3c873a"
      },
      {
        titolo: "Black Widow",
        immagine: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_com_crd_03.jpg",
        colore: "#231f20"
      },
      {
        titolo: "Spider-Man",
        immagine: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_com_crd_03.jpg",
        colore: "#e62429"
      }
    ];


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
          onClick={() => setProva((current) => current + 1)}
        >
          Incrementa Prova
        </button>
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
        <button
          type="button"
          className="toggle-button"
          onClick={() => setShowGrid((current) => !current)}
        >
          {showGrid ? 'Nascondi griglia' : 'Crea Griglia Responsive'}
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
        {showGrid && (
          <div className="container mt-4">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="p-3 border bg-light">Colonna 1</div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="p-3 border bg-light">Colonna 2</div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 mb-3">
                <div className="p-3 border bg-light">Colonna 3</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Qui appaiono le card */}
      <div>
        {cards.map((c, i) => (
          <Card key={i} {...c} />
        ))}
      </div>
    </div>
             


);
}

console.log("ciao Friday 🔥");
export default App;