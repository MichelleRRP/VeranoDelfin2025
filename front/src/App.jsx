import { useState } from 'react'

import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Areas from './pages/Areas';

const App =()=> {


  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <main className='flex-grow'>
            <div>
              <Routes>
                 <Route path="/home" element={<Home/>} />
                 <Route path="/signIn" element={<SignIn/>}/>
                 <Route path="/signUp" element={<SignUp/>}/>
                 <Route path="/Areas" element={<Areas/>}/>
              </Routes>
            </div>
        </main>
      </div>
    </Router>
  )
}

export default App
