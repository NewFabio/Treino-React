import './App.css'

import {useState} from 'react'
import SeuNome from './compents/seuNome'
import Saudacao from './compents/Saudacao'

function App() {
  
  const [nome, setNome] = useState()

  return (
    <div className='App'>
      <h1>Renderização por Listas</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} /> 
    </div>
  )
}

export default App
