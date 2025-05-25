import React from 'react'
import Header from './components/header/Header'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/services'
import Timeline from './components/timeline/Timeline'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'


function App() {

  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Timeline />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
