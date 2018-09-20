import React, { Component } from 'react'
import * as style from './style.less'
import { Button, NavBar, Icon } from 'antd-mobile'
import Split from 'split.js'
//颜料池
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class DivideProportion extends Component {

  componentDidMount() {
    const that = this
    const cls = [], sizes = []
    this.props.factors.forEach((item, index) => {
      cls.push(`#id_${index}`)
      sizes.push(item.proportion)
    })
    let split = Split(cls, {
      sizes,
      minSize: 0,
      snapOffset: 0,
      elementStyle(dimension, size, gutterSize) {
        return {
          'flex-basis': 'calc(' + size + '% - ' + gutterSize + 'px)'
        }
      },
      gutterStyle(dimension, gutterSize) {
        return {
          'flex-basis': gutterSize + 'px'
        }
      },
      onDrag() {
        //保存比例
        const arr = split.getSizes().map(item => parseFloat(item.toFixed(2)))
        that.props.saveProportion(arr)
      }
    })
  }

  clickNext() {
    this.props.history.push('/addoption')
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
            {
              factors.map((item, index) => {
                return (
                  <div id={`id_${index}`} key={index} style={{ background: COLORS[index] }}>
                    <div>
                      <div>{item.text}</div>
                      <div>{parseFloat(item.proportion.toFixed(1))}%</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <Button type='primary' onClick={this.clickNext.bind(this)} style={{ margin: '20px 0 0' }}>下一步</Button>
        </div>
      </div>
    )
  }
}

export default DivideProportion
