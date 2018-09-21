import React, { Component } from 'react'
import * as style from './style.less'
import { Tag, InputItem, Toast, Button, NavBar, Icon } from 'antd-mobile'

class Mark extends Component {

  clickNext() {
    // this.props.history.push('/divideproportion')
  }

  render() {
    const { question, factors, options } = this.props

    return (
      <div >
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.props.history.goBack}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
        <div className={style.mark}>
          <div className={style.question}>问题：{question}</div>

          <Button type='primary' onClick={this.clickNext.bind(this)} style={{ margin: '20px 0 0' }}>下一步</Button>
        </div>
      </div>
    )
  }
}

export default Mark
