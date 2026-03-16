import { useState, useEffect } from "react";

function Orologio() {

  const [ora, setOra] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setOra(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span>{ora.toLocaleTimeString()}</span>
  );
}

export default Orologio;