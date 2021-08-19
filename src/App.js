import Header from './components/Header'
import { BrowserRouter as Switch } from 'react-router-dom'
import Routes from './Routes/Routes'
import './App.css'

function App() {
  return (
    <Switch>
      <Header />
      <Routes />
    </Switch>
  )
}

export default App
