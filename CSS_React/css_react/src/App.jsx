
import './App.css'

import MyComponents from './Components/MyComponents'
import Title from './Components/TITLE'

function App() {
  const n = 15


  const redTitle = 2
  
  return (
    <div className="App">
      {/* CSS global */}
      <h1>CSS no react</h1>
      <MyComponents/>

      {/* Inline Style */}
      <p style={{color: "blue", padding: "24px", borderTop: "1px solid green"}}>Este elemento tem estilos inline</p>
      {/* inline style dinamico */}
      <h2 style={n>19 ? {color: "purple"}: {color:"magenta"}}>
        CSS dinamico
      </h2>

      {/* classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter uma classe</h2>
    

    {/* css modules */}
    <Title/>
    </div>



  )
}

export default App
