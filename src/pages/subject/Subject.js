import React, { Component } from 'react'
import GovFormItem from './GovForm'
import {getSubject} from '../../api/subject'
import {getSession} from '../../utils/storage'
import { ruleDataArr,ruleData } from '../../utils/options'
import './subject.less'
export default class Subject extends Component {
  constructor(props){
    super(props)
    this.handleChangeData = this.handleChangeData.bind(this)
    this.state ={
      CurrentTheme:'',
      CurrentThemeId:'',
      subFormList:[]
    }
  }
  componentDidMount(){
    let themeId = Array.from(getSession('subject_topic')).findIndex((val) => {
      return val.id === getSession('themeId')
    })
    this.setState({
      CurrentThemeId:getSession('themeId'),
      CurrentTheme:getSession('subject_topic')[themeId]['themeName']
    })
    this.getFormSubject()
  }
  // 获取表单的数据
   // 获取表单内容
  async getFormSubject() {
    // 进来先调取接口获取父判断
    let subData = await getSubject(getSession('themeId'))
   
      let formList = subData.data.data
      this.addRule(formList)
      let subject = getSession('subject')
      // 循环插入判断规则 全部不能为空
      formList.forEach((element,index) => {
        if (subject) {
          subject.forEach(sub => {
            if( sub.id === element.id ){
              this.formList.splice(index,1,sub)
            }
          })
        }
      })
      this.setState({
        subFormList:formList
      }) 
  }
   // 递归放置判断
   addRule(list){
    list.forEach(element => {
      if(element.children){
        this.addRule(element.children)
      }
     // 循环放上字段正则
     if(element.isRequired){
       switch(element.choiceType){
         case 2:
          element.validateTrigger = ruleDataArr
          break;
         default: 
          element.validateTrigger = ruleData
          break;
       }
     }
     if(element.choice instanceof Array &&  element.choice.length === 1){
       if(element.type === 1){
         element.data = element.choice[0].name
       }else{
         element.dataArray.push(element.choice[0].name)
       }
     }
   })
  }
  //改变输入框的值 
  handleChangeData (item,res){
    res.data = item
    this.setState({
      subFormList:this.state.subFormList
    })
  }
  // 返回上一步
  goBack (){
    this.props.history.push('/')
  }
  goNext (){
    this.props.history.push('/fillform')
  }
  render() {
    return (
      <div className="three-content subject">
        <div style={{position:'relative'}}>
          <div className="themeName">
            {this.state.CurrentTheme}
          </div>
        </div>
        {this.state.subFormList.map((item,index) =>(
            <GovFormItem item={item} key={index} changeData={this.handleChangeData}></GovFormItem>
        ))}
        <div className="scorll_content">
        <div className="clearfix" style={{marginTop: '40px'}}>
              <div className="fl leftbtn next-btn" style={{marginLeft: '30%',backgroundColor: '#FF6F00'}} onClick={this.goBack.bind(this)}>
                <p>上一步</p>
              </div>
              <div className="fr rightbtn next-btn" style={{marginRight: '30%',backgroundColor: '#FF6F00'}}  onClick={this.goNext.bind(this)}>
                <p>下一步</p>
              </div>
            </div>
         </div>
      </div>
    )
  }
}
