import React from 'react'
import { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'


const Images = () => {
    const {imageData, loading, fetchError} = useContext(PixabayContext);

    if (loading) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3 text-muted">Loading images...</p>
            </div>
        );
    }
    
    if (fetchError) {
        return (
            <div className="d-flex justify-content-center my-5">
                <div className="alert alert-danger text-center" role="alert" style={{ maxWidth: '500px' }}>
                    <strong>Error:</strong> {fetchError}
                </div>
            </div>
        );
    }
    
    if (imageData.length === 0) {
        return (
            <div className="d-flex justify-content-center my-5">
                <div className="alert alert-warning text-center" role="alert" style={{ maxWidth: '500px' }}>
                    No images found. Try a different search or category.
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className='flex'>

                {imageData.map((image) => (
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