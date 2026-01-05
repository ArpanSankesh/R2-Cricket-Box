import React from 'react'
import Hero from '../Components/Hero'
import Gallery from '../Components/Gallery'
import BookingPage from '../Components/BookingSection'
import ContactSection from '../Components/ContactSection'

const Home = () => {
    return (
        <div>
            <Hero />
            <Gallery />
            <BookingPage />
            <ContactSection />
        </div>
    )
}

export default Home