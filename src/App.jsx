import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Cart from './Component/Cart/Cart'
import React from 'react'
import Result from './Component/Result/Result'
import Cafe from './Component/Cafe/Cafe'

function App() {
   return (
      <div className='App'>
         <Header></Header>
         {/* <Cart></Cart> */}
         <Cafe></Cafe>
         <Result></Result>
      </div>
   )
}
export default App
