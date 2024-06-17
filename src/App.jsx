import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './WelcomePage/welcome.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './HomePage.jsx/Home.jsx'
import HomePage from './HomePage.jsx/HomePage.jsx'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element= {<Welcome />} 
          />

          <Route
            path='/home'
            element= {<Home />}
          />
           <Route
            path='/homepage'
            element= {<HomePage />}
          />
          
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
