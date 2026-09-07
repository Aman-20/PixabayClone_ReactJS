import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'

const Navbar = () => {

    const {handleCategory} = useContext(PixabayContext);

    return (
        <div className='container text-center my-3'>
            <button type="button" className="btn btn-outline-info mx-3" onClick={()=>{handleCategory("fashion")}}>Fashion</button>
            <button type="button" className="btn btn-outline-primary mx-3" onClick={()=>{handleCategory("health")}}>Health</button>
            <button type="button" className="btn btn-outline-secondary mx-3" onClick={()=>{handleCategory("science")}}>Science</button>
            <button type="button" className="btn btn-outline-danger mx-3" onClick={()=>{handleCategory("animals")}}>Animals</button>
            <button type="button" className="btn btn-outline-success mx-3"onClick={()=>{handleCategory("buildings")}}>Buildings</button>
            <button type="button" className="btn btn-outline-warning mx-3"onClick={()=>{handleCategory("sports")}}>Sports</button>
            <button type="button" className="btn btn-outline-info mx-3" onClick={()=>{handleCategory("places")}}>Places</button>
            <button type="button" className="btn btn-outline-light mx-3" onClick={()=>{handleCategory("travel")}}>Travel</button>
            <button type="button" className="btn btn-outline-primary mx-3" onClick={()=>{handleCategory("food")}}>Food</button>
        </div>
    )
}

export default Navbar