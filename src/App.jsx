import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './Pages/Header.jsx';
import Hero from "./Pages/Hero.jsx";
import Services from './Pages/Services.jsx';
import Process from './Pages/Process.jsx';
import Technologies from './Pages/Technologies.jsx';
import Projects from "./Pages/Projects.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Header />
        <Hero />
        <Services />
        <Process />
        <Technologies />
        <Projects />
      </div>
    </Router>
  )
}

export default App