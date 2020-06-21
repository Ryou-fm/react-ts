import React, { Component } from 'react'
import Home from '../pages/home/Home'
import About from '../pages/about/index'
import Book from '../pages/book/index'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Error from '../pages/error/Error'
class RouterIndex extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/404" component={Error} />
          <Route path="/index" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/book" component={Book} />
        </Switch>
    </HashRouter>
    )
  }
}

export default RouterIndex; 