import { useState } from 'react'

import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Areas from './pages/Areas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App =()=> {


  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        
      <Navbar/>
        <main className='flex-grow'>
            <div>
              <Routes>
                 <Route path="/home" element={<Home/>} />
                 <Route path="/signIn" element={<SignIn/>}/>
                 <Route path="/signUp" element={<SignUp/>}/>
                 <Route path="/areas" element={<Areas/>}/>
              </Routes>
            </div>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
