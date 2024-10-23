import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/pages/Home'
import Projects from './Components/pages/Projects'
import Company from './Components/pages/Company'
import Contact from './Components/pages/Contact'
import NewProject from './Components/pages/NewProject'
import Project from './Components/pages/Project'


import Container from './Components/layout/Container'
import Navbar from './Components/layout/NavBar'
import Footer from './Components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
            <Route exact path='/' element={<Home />} />   
            <Route path='/project' element={<Projects />} />
            <Route path='/company' element={<Company />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/newproject' element={<NewProject />} />
            <Route path='/project/:id' element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
