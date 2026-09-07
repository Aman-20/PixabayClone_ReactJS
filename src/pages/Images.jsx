import React from 'react'
import { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'


const Images = () => {
    const {imageData, loading, fetchError, loadNext, loadPrev, page} = useContext(PixabayContext);

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
        <>

        <div className="container">
            <div className='flex'>

                {imageData.map((image) => (
                    <div key={image.id}>
                        <div className='item'>
                            <img src={image.webformatURL} alt="image" />
                        </div>
                    </div>
                ))}
                
            </div>
        </div>



        <div className="d-flex justify-content-center align-items-center gap-3 my-4">
            <button className="btn btn-outline-primary" onClick={loadPrev} disabled={page === 1 || loading}>
                Previous
            </button>
            <span>Page {page}</span>
            <button className="btn btn-outline-primary" onClick={loadNext} disabled={loading}>
                Next
            </button>
        </div>
    </>
    )
}

export default Images