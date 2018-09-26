import React, { Component } from 'react'
import { NavBar, Icon, Button, WhiteSpace, TextareaItem, Toast } from 'antd-mobile'
import * as style from './style.less'

class Question extends Component {
  componentDidMount() {
    this.autoFocusInst.focus()
  }
  clickNext() {
    let value = this.autoFocusInst.state.value.trim()
    if (!value) {
      Toast.info('问题不能为空')
      return
    }
    this.props.saveQuestion(value)
    this.props.history.push('/addfactor')
  }
  render() {
    return (
      <div className={style.question}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.props.history.goBack}
        >问题</NavBar>
        <div className={style.body}>
          <div className={style.title}>面临的选择是什么？</div>
          <div className={style.content}>
            <TextareaItem
              title=""
              placeholder="请输入问题..."
              ref={el => this.autoFocusInst = el}
              autoHeight
            />
          </div>
          <div className={style.footer}>
            <Button type='primary' onClick={this.clickNext.bind(this)}>下一步</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Question