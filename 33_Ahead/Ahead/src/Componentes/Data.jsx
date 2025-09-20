import { useState } from "react";


const Data = () => {
  let someData = 10;

//   const [anotherNumber, setAnotherNumber] = useState(15)

  const [outrNumber, setOutronu] = useState(40)
  
    return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar Variável</button>

        </div>
        <div>
            <p>Valor: {outrNumber}</p>
            <button onClick={() => setOutronu(20)
            }>Mudar State</button>
        </div>

    </div>
  );
};

export default Data;