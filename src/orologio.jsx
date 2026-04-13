import { useState, useEffect } from "react";
import './orologio.css';

function Orologio() {

  const [ora, setOra] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setOra(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="orologio">{ora.toLocaleTimeString()}</span>
  );
}

export default Orologio;