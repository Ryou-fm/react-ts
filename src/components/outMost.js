import React, { Component } from 'react'

export default class OutMost extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: [
        {
          name: '主要情形',
          check: false,
          checkname: '/subject',
          show:true,
        },
        {
          name: '补充情形',
          check: false,
          checkname: '/business',
          show:true,
        },
        {
          name: '表单填写',
          check: false,
          checkname: '/fillform',
          show:true,
        },
        {
          name: '材料清单',
          check: false,
          checkname: '/generate',
          show:true,
        },
        {
          name: '配送方式',
          check: false,
          checkname: '/logistics',
          show:false,
        },
      ]
    }
  }
  render() {
    return (
      <div>
         <div style={{width:'200px',height:'400px'}} className="fl left-bar" >
        <ul>
            {this.state.list.map((item,idx) =>(
               <li className={item.check ? 'nowLi3' : 'nowLi3Default'} key={idx}>{item.name}</li>
            ))}
        </ul>
        
        </div>
        {this.props.children}
      </div>
    )
  }
}
