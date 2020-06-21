import React, { Component } from 'react'
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
import {HomeOutlined,FacebookOutlined,InfoCircleOutlined} from '@ant-design/icons'
export default class Nav extends Component {
  render() {
    let {mode,id} = this.props
    return (
      <Menu mode={mode} id={id} theme="light">
          <Menu.Item >
            <Link to="/index"><HomeOutlined />首页
            </Link>
          </Menu.Item>
          <Menu.Item>
              <Link to="/book"><FacebookOutlined />教程</Link>
          </Menu.Item>
          <Menu.Item>
              <Link to="/about"><InfoCircleOutlined />关于</Link>
          </Menu.Item>
      </Menu>
    )
  }
}
