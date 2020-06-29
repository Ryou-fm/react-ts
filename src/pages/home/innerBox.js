import React, { Component } from 'react'
export default class innerBox extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  openDetail (){
    this.props.detail(this.props.item.id)
    // this.props.history.push('/warn')
  }
  boxStyle = {
    boxShadow:`0 0 8px 0 ${this.props.item.themeColor}`,
    backgroundImage: `linear-gradient(167deg,${this.props.item.themeColor}, #ffffff)`
  }
  boxStyles ={
    color:'white',
    padding:'8px 6px',
    position:'absolute',
    bottom: '10px',
    borderRadius:'8px',
    right: '10px',
    backgroundColor:`${ this.props.item.themeColor}`,
  }
  render() {
    return (
       <div className="content-nav" style={this.boxStyle} onClick={this.openDetail.bind(this)} >
          <div  className="title" >{this.props.item.themeName}
          <p style={{fontSize:10}}>{this.props.item.description}</p>
          </div>
           <div style={this.boxStyles}>马上办理</div>
        </div>
    )
  }
}
