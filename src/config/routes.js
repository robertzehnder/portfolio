import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/App'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Works from '../components/Works'
import Contact from '../components/Contact'

module.exports = (
  <Route path='/'component={App}>
    <IndexRoute component={Welcome} />
    <Route path='/about' component={About} />
    <Route path='/works' component={Works} />
    <Route path='/contact' component={Contact} />
  </Route>
)
