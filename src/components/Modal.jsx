import React from 'react'

const modalStyle = {
  height: '100vh',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  background: 'rgba(0,0,0, 0.8)',
  top: 0,
  left: 0,
  image: { width: '200px', height: '200px' },
}

const Modal = ({ avatar, isOpen }) => (
  <div style={{ ...modalStyle, display: isOpen ? 'flex' : 'none' }}>
    <img style={modalStyle.image} src={avatar} alt="avatar" />
  </div>
)

export default Modal
