import React from 'react'
import Porky from '../assets/porky.gif'

const notFoundStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

function PageNotFound() {
  return (
    <div style={notFoundStyle}>
      <h1>A Pa - Pa - Phage Not Found!?</h1>
      <img src={Porky} alt="page not found" />
    </div>
  )
}

export default PageNotFound
