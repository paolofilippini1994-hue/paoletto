import './App.css';
import Title from './title'; 
import Mark from './mark';
import Frase from './frase';
import Orologio from "./orologio";
import MyCalendar from './calendar';
import MyCarousel from './MyCarousel';

function App() {
  return (
    <div>
      <Title>ciao friday</Title>
      <h3 style={{ textAlign: "center" }}>Ciao</h3>
      <Frase>
        Sono <Mark backgroundColor="lightgreen">Evidenziato</Mark>
      </Frase>
      <Frase>ora no</Frase>
      <p style={{ textAlign: "center" }}>ahahahahaha</p>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        Ora sono le <Orologio />
      </p>
      <MyCalendar />
      <h1 className="text-center mt-3">Il mio carousel</h1>
      <MyCarousel />
    </div>
  );
}

export default App;