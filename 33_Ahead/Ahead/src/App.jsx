import './App.css'

// Imagem em assets

import night from "./assets/night.jpg";
import ConditionalRender from './Componentes/ConditionalRender';

// 3 - useState
import Data from './componentes/Data';

import ListRender from './Componentes/ListRender';

import ShowUserName from './Componentes/ShowUserName';

import CarDetails from './Componentes/CarDetails';

import Fragment from './Componentes/Fragment';

import Container from './Componentes/Container';


import ExecuteFunction from './Componentes/ExecuteFunction';

import { useState } from 'react';
import Message from './Componentes/Message';
import ChangeMessage from './Componentes/ChangeMessage';


// Renderização de listas com componente
const cars = [
  {id: 1, brand:"Ferrari", color: "Vermelho", km: 1},
  {id: 2, brand:"Lambo", color: "Gold", km: 0},
  {id: 3, brand:"Pagani", color: "Silver", km: 100}
]

function App() {

  // Função em prop
  function showMessage() {
    console.log('Evento do componente pai')
  }

  // state lift
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }
  
  return (
  <div className="App" style={{paddingBottom: "500px"}}>
    <h1>Avançando em React</h1>
    {/* Image in public */}
    <img src="/img.jpg" alt="Estrada qualquer em uma cidade qualquer" />

    {/* Imagem em assets */}
    <img src={night} alt="Outra imagem" />

    {/* 3 - useState */}
    
    <Data/>

    {/* ListRender */}
    <ListRender/>

    {/* Conditional Render */}
    <ConditionalRender/>

    {/* Props */}
    <ShowUserName name="Albert"/>

    {/* Desestruturando props */}
    <CarDetails brand="Volkswaggen" km={756} color="Branca" />
  
    {/* Reaproveitamento de componentes */}
    <CarDetails brand="Lambo" km={6567} color="Whitolas" />
    <CarDetails brand="Lexus" color="Azur" km={4567 } />

    {/* renderização de lista com componente */}
    {cars.map((car) => (
      <CarDetails 
      key={car.id} 
      brand={car.brand} 
      color={car.color} 
      km={car.km}/>
    ))}

    <Fragment/>

    <Container>
      <p>Alguma coisa</p>
    </Container>

    <ExecuteFunction myFunction={showMessage}/>

    {/* State lift */}
    <Message msg={message}/>
    <ChangeMessage handleMessage={handleMessage}/>
  </div>
  
  

  );
};

export default App
