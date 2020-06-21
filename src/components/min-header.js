import React, { Component } from 'react'
import {Layout,Row,Col,Divider,Dropdown,Button} from 'antd'
import Nav from "./nav.js"
import {BarsOutlined} from '@ant-design/icons'
import './common.css'
export default class minHeader extends Component {
  render() {
    return (
      <Layout.Header theme="dark">
         <Row className="wrap">
            <Col md={6} xs={24}>
                <h1 id="logo">cNode</h1>
            </Col>
            <Col md={18} xs={0}>
              <Divider type="vertical" className="headerDivider" />
              <Nav id="nav" mode="horizontal"></Nav>
            </Col>
            <Col xs={24} md={0} className="xsNav">
                <Dropdown
                    overlay={
                        <Nav id="xsnav" mode="vertical" />
                    }
                    placement="bottomRight"
                    trigger={["click","touched"]}
                >
                    <Button><BarsOutlined /></Button>
                </Dropdown>
            </Col>
          </Row>
      </Layout.Header>
    )
  }
}
