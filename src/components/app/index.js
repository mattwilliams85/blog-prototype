import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../../containers/homeContainer'


const App = () => (
  <div className="App--root">
    <main>
      <Route exact path="/" component={Home} />
    </main>
  </div>
)

export default App
