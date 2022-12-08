import React from 'react'

import Header from './pages/header/header';
import Hero from './pages/hero';
import About from './pages/about';
import Rates from './pages/rates';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import Footer from './pages/footer';

const App = () => {
  return (
    <div className= 'relative'>
      <Header />
      <Hero />
      <About />
      <Rates />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App