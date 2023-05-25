import { useState } from 'react'

import './App.css'

import Home from './pages/home'


function App() {
  const [count, setCount] = useState(0)

  return (
  
    <Router>
    <Navbar />

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  </Router>
);
}

export default App
