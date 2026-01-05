import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import BookingSection from './Components/BookingSection'
import Gallery from './Components/Gallery'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='text-9xl'>
      <Navbar/>
      <Home />
      <Footer/>
    </div>
  )
}

export default App