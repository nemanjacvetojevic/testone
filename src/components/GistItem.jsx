import React from 'react'

const gistStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  padding: '13px 0',
  cursor: 'pointer',
  borderBottom: '1px solid #EAEAEA',
  name: {
    fontWeight: 400,
    fontSize: '14px',
  },
  image: {
    width: '74px',
    height: '74px',
    marginRight: '16px',
    background: '#000',
    overflow: 'hidden',
  },
}

function GistItem({ image, gistName, isClicked, onClick }) {
  return (
    <div onClick={() => onClick()} style={gistStyle}>
      <div style={gistStyle.image}>
        <img
          style={{
            opacity: isClicked === 'clicked' ? 0.6 : 1,
            width: '100%',
            height: 'auto',
          }}
          src={image}
          alt={gistName}
        />
      </div>
      <div>
        <h3
          style={{
            ...gistStyle.name,
            color: isClicked === 'clicked' ? '#06A9F6' : '',
          }}
        >
          {gistName}
        </h3>
      </div>
    </div>
  )
}

export default GistItem
