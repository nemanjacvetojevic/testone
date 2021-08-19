import React from 'react'
import { Link } from 'react-router-dom'
const headerStyle = {
  backgroundColor: '#F3F3F3',
  padding: '6px 16px',
  heading: {
    fontSize: '15px',
    lineHeight: '17px',
    margin: 0,
    textDecoration: 'none',
    color: '#000',
  },
}

function Header() {
  return (
    <div style={headerStyle}>
      <Link to="/" style={headerStyle.heading}>
        <h1 style={headerStyle.heading}>GIST</h1>
      </Link>
    </div>
  )
}

export default Header
