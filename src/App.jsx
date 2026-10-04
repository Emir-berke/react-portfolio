import { BrowserRouter, Routes, Route, Link } from 'react-router'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
     <nav>
  <Link to="/" className="logo" aria-label="Emir Berke home">EBP</Link>
  <Link to="/">Home</Link>
  <Link to="/about">About Me</Link>
  <Link to="/projects">Projects</Link>
  <Link to="/education">Education</Link>
  <Link to="/services">Services</Link>
  <Link to="/contact">Contact Me</Link>
</nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App