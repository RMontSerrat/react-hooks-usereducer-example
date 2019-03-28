import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Repositories from './pages/Repositories/Repositories'
import { StoreContainer } from './store';

const App = () =>
  <Router>
    <StoreContainer>
      <Route exact path="/" component={Home} />
      <Route path="/user/:login" component={Repositories} />
    </StoreContainer>
  </Router>

export default App;