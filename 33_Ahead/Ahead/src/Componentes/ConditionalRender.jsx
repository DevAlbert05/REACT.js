import React from 'react'

const ConditionalRender = () => {

const x = true;

const name = "Albert"

  return <div>
    {/* Render condicional */}

    <h3>Isso será exibido?</h3>
    {x && <p>Se x for true, sim!</p>}

    {/* else */}
    {name === "António" ?(
        <div>
            <p>Olá, António!</p>
        </div>
    ) : (
        <div>
            <p>Nome não encontrado!</p>
        </div>
    )}
  </div>
}

export default ConditionalRender