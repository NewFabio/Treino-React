import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Components/pages/Home'
import Company from './Components/pages/Company'
import Contact from './Components/pages/Contact'
import NewProject from './Components/pages/NewProject'

import Container from './Components/layout/Container'

function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      </div>
      <Container customClass='min-height'>
        <Routes>        
            <Route exact path='/' element={<Home />} />
            <Route path='/company' element={<Company />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/newproject' element={<NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  
  )
}

export default App
