import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import BookingSection from './Components/BookingSection'
import Gallery from './Components/Gallery'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='text-9xl'>
      <Navbar/>
      <Hero/>
      <Gallery/>
      <BookingSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App