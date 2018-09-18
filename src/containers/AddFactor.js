import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as style from './AddFactor.less'
import { Tag, InputItem, Toast, Button, NavBar, Icon } from 'antd-mobile'
import { addFactor, reduceFactor } from '../actions'

class AddFactor extends Component {
  componentDidMount() {
    this.inputRef.focus()
  }

  //点击添加
  addFactor() {
    let value = this.inputRef.state.value.trim()
    if (!value) {
      Toast.info('请输入内容')
      return
    }
    this.props.dispatch(addFactor(value))
    this.inputRef.state.value = ''
  }

  //移除标签
  remove(text) {
    this.props.dispatch(reduceFactor(text))
  }

  clickNext() {
    if (!this.props.factors.length) {
      Toast.info('请至少添加一个标签')
      return
    }
    this.props.history.push('/divideproportion')
  }

  render() {
    const { question, factors } = this.props
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
        <div className={style.addFactor}>
          <div className={style.question}>问题：{question}</div>
          <div className={style.title}>影响做出选择的因素有哪些？</div>
          <div className={style.tagContainer}>
            {
              factors.map((item, index) => {
                return <Tag closable key={index}
                  onClose={(a) => {
                    this.remove(item.text)
                  }}
                  afterClose={() => {
                    console.log('afterClose');
                  }}
                >
                  {item.text}
                </Tag>
              })
            }
          </div>
          <div>
            <InputItem placeholder="请输入" ref={el => this.inputRef = el} />
          </div>
          <Button type='primary' onClick={this.addFactor.bind(this)} style={{ margin: '20px 0' }}>添加</Button>
          <Button type='primary' onClick={this.clickNext.bind(this)} style={{ margin: '20px 0 0' }}>下一步</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.question,
    factors: state.factors
  }
}
export default connect(mapStateToProps)(AddFactor)
