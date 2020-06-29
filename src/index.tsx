import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.less'
import { HashRouter } from 'react-router-dom'
import RouterIndex from "./router/index"
import MainHeader from "./components/min-header"
ReactDOM.render(
  <div id="app">
  <HashRouter>
    <MainHeader />
    <RouterIndex ></RouterIndex>
  </HashRouter>
  </div>,
  document.getElementById('root')
)
