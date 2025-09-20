import React from 'react'

const Events = () => {

  const handleClick = (e) => {
    console.log("Executou")
    console.log(e)
  }

  // Função de renderização

  const renderSomim = (x) => {
    if(x) {
      return <h1>Renderizando isso!</h1>
    } else {
      return <h1>Renderizando outra coisa!</h1>
    }
  };

  


  return (
    <div>
        <div>
            <button onClick={() => console.log("Testando um evento")}>
                Clique aqui
                </button>
        </div>

        {/* Evento de uma função */}

        <div>
          <button onClick={handleClick}>Handle here</button>
        </div>

        {/* Função render */}
        {renderSomim(true)}
        {renderSomim(false)}
    </div>
  )
}

export default Events