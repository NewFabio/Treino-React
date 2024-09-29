import './App.css'
import HelloWorld from './compents/HelloWorld'
import SayMyName from './compents/SayMyName'
import Pessoa from './compents/Pessoa'

function App() {
  const name = 'Junio'

  return (
    <div className='App'>
      <HelloWorld/>
      <SayMyName name='Fabio'/>
      <SayMyName name='Keli'/>
      <SayMyName name='Sophia'/>
      <SayMyName name={name}/>
      <Pessoa
        name='Fabio'
        age='33'
        profession='Military'
        foto='https:via.placeholder.com/150'
      />
    </div>
  )
}

export default App
