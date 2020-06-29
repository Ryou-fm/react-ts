import React, { Component } from 'react'
import InnerBox from './innerBox'
import {getMatterReviewPage} from '../../api/home'
import {setSession} from '../../utils/storage'
import './home.less'
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
      setSession('subject_topic',data)
      that.setState({
        topic:data
      })
    })
  }
  openDetail (id){
    setSession('themeId',id)
    this.props.history.push('/warn')
  }
  render() {
    return (
      <div className = "main-container">
         <div className="content">
          <ul>
              {this.state.topic.map((item,idx) =>(
                <li key={idx} style={{backgroundColor:item.themeColor,width:'230px',height:'140px',marginBottom: '50px'}}>
                   <InnerBox item={item} detail={this.openDetail.bind(this)}/>
                </li>
              ))}
            </ul>
            </div>
      </div>
    )
  }
}
