import React from 'react'
import Bugs from './assets/bugs.gif'

const boundaryStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={boundaryStyle}>
          <h1>Something went wrong Doc!</h1>
          <img src={Bugs} alt="Bugs Bunny" />
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
