import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import SignIn from './component/User_Auth/SignIn';
import SignUp from './component/User_Auth/SignUp';
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/register' element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App;
