import './App.css'

// Importando componente

import FirstComponent from "./componentes/FirstComponent"

// Template expression
import TemplateExpression from './componentes/TemplateExpression'


import Hierarquia from './componentes/hierarquia'

import Events from './componentes/Events'
function App() {


  return <div className='App'>
    <h1>Fundamentos do React</h1> 
    <FirstComponent/>
    <TemplateExpression/>
    <Hierarquia/>
    <Events/>
  </div>
   
  
}

export default App
