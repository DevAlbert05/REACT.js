import React from 'react'

const TemplateExpression = () => {

    const name = "Albert";


    const data = {
        age: 22,
        job: "Programador"

    }
  return (
    <div>
        <p>A soma é {2+2}</p>
        <h3>Bem-vindo, {name}!</h3>
        <p>A sua idade é {data.age} anos, e trabalha
            como {data.job}.
        </p>
    </div>
  )
}

export default TemplateExpression