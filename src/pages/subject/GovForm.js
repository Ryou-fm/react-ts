import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
export default class GovForm extends Component {

  layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
  tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  }
  render() {
    return (
      <div>
         <Form
         
          name="basic"
          initialValues={{ remember: true }}
         
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item  name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
