import React, { useContext } from 'react'
import PixabayContext from "../context/PixabayContext"


const ImgModel = () => {

    const { selectedImg, setSelectedImg } = useContext(PixabayContext);

    if (!selectedImg) return null;

    const closeModel = () => {
        setSelectedImg(null);
    }

    return (
        <>
            {/* backdrop */}
            <div className="modal-backdrop show" onClick={closeModel}></div>

            {/* modal */}
            <div className="modal d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Image Details</h5>
                            <button type="button" className="btn-close" onClick={closeModel}></button>
                        </div>

                        <div className="modal-body text-center">
                            <img
                                src={selectedImg.largeImageURL}
                                alt={selectedImg.tags}
                                className="img-fluid rounded mb-3"
                            />

                            <div className="d-flex justify-content-center gap-4 text-muted mb-3">
                                <span>👤 {selectedImg.user}</span>
                                <span>👍 {selectedImg.likes}</span>
                                <span>⬇️ {selectedImg.downloads}</span>
                                <span>👁️ {selectedImg.views}</span>
                            </div>

                            <p className="text-muted">
                                <strong>Tags:</strong> {selectedImg.tags}
                            </p>
                        </div>

                        <div className="modal-footer justify-content-center">
                            
                            <a    href={selectedImg.largeImageURL}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Download
                            </a>
                            <button className="btn btn-secondary" onClick={closeModel}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImgModel