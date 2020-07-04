import React, { Component } from 'react'
import {getdescirpt} from '../../api/warn'
import {getSession} from '../../utils/storage'
import { Button} from 'antd';
import './warn.less'
function inject_unount (target){
  // 改装componentWillUnmount，销毁的时候记录一下
  let next = target.prototype.componentWillUnmount
  target.prototype.componentWillUnmount = function () {
      if (next) next.call(this, ...arguments);
      this.unmount = true
   }
   // 对setState的改装，setState查看目前是否已经销毁
  let setState = target.prototype.setState
  target.prototype.setState = function () {
      if ( this.unmount ) return ;
      setState.call(this, ...arguments)
  }
}

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
  componentWillUnmount (){

  }
  setTime (){
    let time = setInterval(() => {
      if(this.state.nowTime > 0){
        this.setState({
          nowTime : this.state.nowTime - 1 
        })
      }else{
        this.setState({
          showButton : true
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
