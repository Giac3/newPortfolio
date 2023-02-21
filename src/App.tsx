import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Work from './Pages/Work'
import Contact from './Pages/Contact'

const App: React.FC = () => {
  const aboutRef = useRef()
  const homeRef = useRef()
  const workRef = useRef()
  const contactRef = useRef()

history.scrollRestoration ='manual'

  return (
    <div className='flex-col overflow-hidden  scrollbar-hidden h-[100%] w-[100%]   items-center justify-center flex '> 
    
    <Home aboutRef={aboutRef} homeRef={homeRef} workRef={workRef} contactRef={contactRef}/>
    <About aboutRef={aboutRef} homeRef={homeRef} workRef={workRef} contactRef={contactRef}/>
    <Work aboutRef={aboutRef} homeRef={homeRef} workRef={workRef} contactRef={contactRef}/>
    <Contact aboutRef={aboutRef} homeRef={homeRef} workRef={workRef} contactRef={contactRef}/>
    
    </div>
  )
}

export default App
