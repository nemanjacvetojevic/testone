import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ErrorBoundary from './ErrorBoundary.jsx'

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById('root')
)
