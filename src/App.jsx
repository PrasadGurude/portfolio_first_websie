import { useState } from 'react'
import './App.css'
import Appbar from './components/Appbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container bg-blue-950 h-full'>
      <Appbar />
      <Home/>
      <About />
      <Skills />
    
    </div>
  )
}

export default App
