import React, { Component } from 'react'
import {getdescirpt} from '../../api/warn'
import {getSession} from '../../utils/storage'
import { Button} from 'antd';
import './warn.less'

export default class Warn extends Component {
  constructor(props){
    super(props)
    this.state = {
      descriptHtml :'',
      nowTime:5,
      showButton:false,
    }
  }
  componentDidMount (){
    getdescirpt(getSession('themeId')).then(res=>{
      this.setState({
        descriptHtml :res.data.data
      })
    })
    this.setTime()
  }
 
  setTime (){
    let time = setInterval(() => {
      if(this.state.nowTime > 0){
        this.setState({
          nowTime : this.state.nowTime - 1 
        })
      }else{
        this.setState({
          showButton : true,
          nowTime:0,
        })
        clearInterval(time)
      }
    }, 1000);
  }
  goNext (){
    this.props.history.push('/subject')
  }
  render() {
    return (
      <div className="three-content subject">
        <div style={{position:'relative'}}>
          <div className="themeName">
            填报须知
          </div>
        </div>
        <div className="scorll_content">
          <div dangerouslySetInnerHTML={{__html:this.state.descriptHtml}} className="htmlStyle"></div>
        </div>
        <div className="confirm_buttom">
           <Button type="warning" shape="round"  className={this.state.showButton ? 'confirm_button' : ''} onClick={this.goNext.bind(this)}>我已阅读并知晓{this.state.nowTime}s</Button>
        </div>
      </div>
    )
  }
}
