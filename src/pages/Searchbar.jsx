import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'

const Searchbar = () => {

    const {setimageSearch} = useContext(PixabayContext);
    const {fetchImagebycat} = useContext(PixabayContext);
    const {imageSearch} = useContext(PixabayContext);

  return (
    <div className='container'>

        <form onSubmit={fetchImagebycat} style={{display:'flex', flexDirection:'row', justifyContent:'center' ,gap:'20px'}}>

        <input type="text" className='form-control' placeholder='Search for Any Image 🔎'
        required 
        value={imageSearch} 
        style={{maxWidth:'600px'}}
        onChange={(e)=>(setimageSearch(e.target.value))}
        />

        <button className="btn btn-primary" type="submit">Search</button>

        </form>

    </div>
  )
}

export default Searchbar