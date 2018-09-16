import React, { Component } from 'react'
import { NavBar, Icon, Button, WhiteSpace, TextareaItem } from 'antd-mobile'
import * as style from './Question.less'

class Question extends Component {
  componentDidMount() {
    this.autoFocusInst.focus()
  }
  clickNext() {
    this.props.history.push('/addfactor')
  }
  render() {
    return (
      <div className={style.question}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
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