import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Reg from './Pages/Reg'
import Dashboard from './Pages/Dashboard'
import History from './Pages/History'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
     <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path='/reg' element={<Reg/>}/>
        <Route path='/dash' element={<Dashboard/>}/>
        <Route path='/his' element={<History/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
