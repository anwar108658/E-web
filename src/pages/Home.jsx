import React from 'react'
import HomeDefault from '../component/features/Home'
import Services from '../component/features/Services/Index'
import About from '../component/features/About/index'
import Contact from '../component/features/Contact/Index'
import Footer from '../component/common/Footer/Footer'

const Home = () => {
  return (
    <>
      <HomeDefault/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home