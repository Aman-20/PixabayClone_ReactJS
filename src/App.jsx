import React from 'react'
import Images from './pages/Images'
import Navbar from './pages/Navbar'
import Searchbar from './pages/Searchbar'
import Footer from './pages/Footer'
import ImgModel from './pages/ImgModel'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Searchbar/>
      <ImgModel/>
      <Images/>
      <Footer/>
    </div>
  )
}

export default App