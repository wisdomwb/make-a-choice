import React, { Component } from 'react'
import * as style from './style.less'
import { Tag, InputItem, Toast, Button, NavBar, Icon } from 'antd-mobile'
import Split from 'split.js'

class DivideProportion extends Component {

  componentDidMount() {
    Split(['#one', '#two', '#three'], {
      minSize: 0,
      elementStyle: function (dimension, size, gutterSize) {
        return {
          'flex-basis': 'calc(' + size + '% - ' + gutterSize + 'px)'
        }
      },
      gutterStyle: function (dimension, gutterSize) {
        return {
          'flex-basis': gutterSize + 'px'
        }
      }
    })
  }

  clickNext() {

  }

  render() {
    const { question, factors } = this.props
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.props.history.goBack}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
        <div className={style.divideProportion}>
          <div className={style.question}>问题：{question}</div>
          <div className={style.title}>划分这些因素的权重</div>
          <div className={style.dividerWrapper}>
            <div id="one">距离</div>
            <div id="two">价格</div>
            <div id="three">环境</div>
          </div>
          <Button type='primary' onClick={this.clickNext.bind(this)} style={{ margin: '20px 0 0' }}>下一步</Button>
        </div>
      </div>
    )
  }
}

export default DivideProportion
