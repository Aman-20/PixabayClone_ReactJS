import React, { useContext } from 'react'
import PixabayContext from '../context/pixabayContext'

const Navbar = () => {

    const {setimageCat} = useContext(PixabayContext);

    return (
        <div className='container text-center my-3'>
            <button type="button" className="btn btn-outline-info mx-3" onClick={()=>{setimageCat("people")}}>Random</button>
            <button type="button" className="btn btn-outline-primary mx-3" onClick={()=>{setimageCat("nature")}}>Nature</button>
            <button type="button" className="btn btn-outline-secondary mx-3" onClick={()=>{setimageCat("science")}}>Science</button>
            <button type="button" className="btn btn-outline-danger mx-3" onClick={()=>{setimageCat("animals")}}>Animals</button>
            <button type="button" className="btn btn-outline-success mx-3"onClick={()=>{setimageCat("buildings")}}>Buildings</button>
            <button type="button" className="btn btn-outline-warning mx-3"onClick={()=>{setimageCat("sports")}}>Sports</button>
            <button type="button" className="btn btn-outline-info mx-3" onClick={()=>{setimageCat("transportation")}}>Cars</button>
            <button type="button" className="btn btn-outline-light mx-3" onClick={()=>{setimageCat("travel")}}>Travel</button>
            <button type="button" className="btn btn-outline-primary mx-3" onClick={()=>{setimageCat("food")}}>Food</button>
        </div>
    )
}

export default Navbar