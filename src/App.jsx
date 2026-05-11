import React from 'react'
import Images from './pages/Images'
import Navbar from './pages/Navbar'
import Searchbar from './pages/Searchbar'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Searchbar/>
      <Images/>
      <Footer/>
    </div>
  )
}

export default App