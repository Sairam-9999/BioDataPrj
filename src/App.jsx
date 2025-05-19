import React from 'react'
import Header from './components/header/Header'
import './App.css'
import Home from './components/home/Home'

function App() {

  return (
    <>
      <Header />

      <main className='main'>
        <Home></Home>
      </main>
    </>
  )
}

export default App
