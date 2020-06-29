import React, { Component } from 'react'
import Home from '../pages/home/Home'
import Warn from '../pages/warn/Warn'
import Subject from '../pages/subject/Subject'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Error from '../pages/error/Error'
import OutMost from "../components/outMost"
class RouterIndex extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/404" component={Error} />
          <OutMost>
            <Route path="/home" component={Home} />
            <Route path="/warn" component={Warn} />
            <Route path="/subject" component={Subject} />
          </OutMost>
        </Switch>
    </HashRouter>
    )
  }
}

export default RouterIndex; 