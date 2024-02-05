import React from 'react'
import Nav from './Components/Nav'
import Banner from './Components/Banner'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import Details from './Components/Details'

const App = () => {
  return (
    <div className="bg-green-50">
      <Nav />
      <Banner />
      <About />
      <Details />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App