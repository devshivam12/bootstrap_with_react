import React from 'react'
import NavBar from '../components/NavBar'
import BodySection from '../components/BodySection'
import Feature from '../components/Feature'
import AddNew from '../components/AddNew'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <NavBar />
      <BodySection />
      <Feature />
      <div id='addnew' className='mt-8'>
        <AddNew />
      </div>
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
