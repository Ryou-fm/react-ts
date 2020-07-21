import React, { Component } from 'react'
import { Form,Radio,Checkbox,} from 'antd';
export default class GovForm extends Component {
  constructor(props){
    super(props)
    this.state ={
      layout : {
        labelCol: { span: 16,offset:4 },
      },
     
    }
  }
  handleChangeData (e){
    this.props.changeData(e.target.value,'data',this.props.item)
   
  }
  // handleChangeData (e){  
   
  //   this.props.changeData(e,'dataArray',this.props.item)
  // }
  render() {
    return (
      <div>
         <Form
          {...this.state.layout}
          name={this.props.name}
          initialValues={{ remember: true }}
        >
          <Form.Item
            rules={this.props.item.rule}
          >
            <div slot="label" className="itemName">
                <span>{this.props.item.name}</span>
            </div>
            {this.props.item.choiceType === 1
              ?
              <Radio.Group onChange={this.handleChangeData.bind(this)} value={this.props.item.data}>
              {this.props.item.choice.map((check,index)=>(
                  <Radio value={check.name} key={index}>{check.name}</Radio>
              ))}
              </Radio.Group>
              :
              <Checkbox.Group  value={this.props.item.dataArray}>
                {this.props.item.choice.map((check,index)=>(
                  <Checkbox value={check.name} style={{ lineHeight: '32px' }}  key={index}>
                      {check.name}
                  </Checkbox>
                ))}
                </Checkbox.Group>
            }
         
          </Form.Item>
        </Form>
         {this.props.item.children.map((item,index)=>(
              <GovForm item={item} key={index} changeData={this.handleChangeData}></GovForm>
           ))}
       
      </div>
    )
  }
}
