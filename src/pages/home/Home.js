import React, { Component } from 'react'
import {getMatterReviewPage} from '../../api/home'
export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      topic:[],
    }
  }
  componentDidMount (){
    let that = this
    getMatterReviewPage().then(res =>{
      let {data}  = res.data
      console.log(data)
      
      that.setState({
        topic:data
      })
      console.log(that.state.topic)
      
    })
  }
  render() {
    return (
      <div className = "main-container">
         <div className="content">
          <ul>
              {this.state.topic.map((item,idx) =>(
                <li key={idx} style={{backgroundColor:item.themeColor}}>{item.themeName}</li>
              ))}
            </ul>
            </div>
      </div>
    )
  }
}
