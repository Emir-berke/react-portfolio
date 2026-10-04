import { HashRouter, Routes, Route, Link, NavLink } from 'react-router'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <HashRouter>
     <nav>
  <Link to="/" className="logo" aria-label="Emir Berke home">EBP</Link>
<NavLink to="/" end>Home</NavLink>
<NavLink to="/about">About Me</NavLink>
<NavLink to="/projects">Projects</NavLink>
<NavLink to="/education">Education</NavLink>
<NavLink to="/services">Services</NavLink>
<NavLink to="/contact">Contact Me</NavLink>
</nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="site-footer">
  <p>© {new Date().getFullYear()} Emir Berke Peker</p>

  <a
    href="https://github.com/Emir-berke"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>
</footer>
    </HashRouter>
  )
}

export default App