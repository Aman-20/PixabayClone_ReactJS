import React from 'react'
import { useContext } from 'react'
import PixabayContext from '../context/pixabayContext'


const Images = () => {
    // const {imageData} = useContext(PixabayContext);
    const data = useContext(PixabayContext);

    return (
        <div className="container">
            <div className='flex'>

                {data.imageData.map((image) => (
                    <div key={image.id}>
                        <div className='item'>
                            <img src={image.largeImageURL} alt="image" />
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Images