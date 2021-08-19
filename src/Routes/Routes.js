import { Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import PageNotFound from '../Pages/PageNotFound'

export default function Routes() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="*" component={PageNotFound} />
    </>
  )
}
