import React, { Component } from 'react'
import './common.css'
export default class minHeader extends Component {
  beBack (){
    console.log(this)
    
  }
  handerAdmin (){
    console.log(this)
  }
  render() {
    return (
      <div className="page-header" style={{verticalAlign:'middle',textAlign:'left'}}>
          <div onClick={this.beBack.bind(this)} className="logo">
              <img src={require("../assets/img/logo.png")} alt="" />
          </div>
          <div className="home fr" >
            <div onClick={this.handerAdmin.bind(this)}>
              <img src={require("../assets/img/admin.png")} alt="" />
            </div>
          </div>
     </div>
    )
  }
}
