import React from 'react'

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: '40px',
        padding: '20px',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <h5 style={{ marginBottom: '10px' }}>
        Pixabay Clone 📸
      </h5>

      <p style={{ margin: 0 }}>
        Search and explore beautiful images from around the world.
      </p>

      <small style={{ display: 'block', marginTop: '10px', opacity: '0.7' }}>
        © 2026 All Rights Reserved
      </small>
    </footer>
  )
}

export default Footer