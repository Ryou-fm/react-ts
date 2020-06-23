import React, { Component } from 'react'
import './common.css'
export default class minHeader extends Component {
  constructor(props){
    super(props)
  }
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
              <img src="../assets/img/logo.png" alt="" />
          </div>
          <div className="home fr" >
            <div onClick={this.handerAdmin.bind(this)}>
              <img src="../assets/img/admin.png" alt="" />
               <span className="title">个人中心</span>
            </div>
          </div>
     </div>
    )
  }
}
