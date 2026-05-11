import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'

const Navbar = () => {

    const {setimageCat} = useContext(PixabayContext);

    return (
        <div className='container text-center my-3'>
            <button type="button" className="btn btn-outline-info mx-3" onClick={()=>{setimageCat("fashion")}}>Fashion</button>
            <button type="button" className="btn btn-outline-primary mx-3" onClick={()=>{setimageCat("health")}}>Health</button>
            <button type="button" className="btn btn-outline-secondary mx-3" onClick={()=>{setimageCat("science")}}>Science</button>
            <button type="button" className="btn btn-outline-danger mx-3" onClick={()=>{setimageCat("animals")}}>Animals</button>
            <button type="button" className="btn btn-outline-success mx-3"onClick={()=>{setimageCat("buildings")}}>Buildings</button>
            <button type="button" className="btn btn-outline-warning mx-3"onClick={()=>{setimageCat("sports")}}>Sports</button>
            <button type="button" className="btn btn-outline-info mx-3" onClick={()=>{setimageCat("places")}}>Places</button>
            <button type="button" className="btn btn-outline-light mx-3" onClick={()=>{setimageCat("travel")}}>Travel</button>
            <button type="button" className="btn btn-outline-primary mx-3" onClick={()=>{setimageCat("food")}}>Food</button>
        </div>
    )
}

export default Navbar