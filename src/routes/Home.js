import React, { Component } from 'react'
import { NavBar, Icon, Button, WhiteSpace } from 'antd-mobile'
import * as style from './Home.less'

class Home extends Component {
  clickStart() {
    this.props.history.push('/question')
  }
  render() {
    return (
      <div className={style.home}>
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
          <div className={style.title}>Make A Choice</div>
          <div className={style.content}>
            我们总是面临一些这样的选择，它们牵扯到多个因素，而且有多个可供选择的方向。如果我们仓促决定，难免日后追悔。<br />
            这款小应用可以帮助你分配影响因素的权重，评价各种选项的优势，然后根据数据做出较理性的推荐。
          </div>
          <div className={style.footer}>
            <Button type='primary' onClick={this.clickStart.bind(this)}>开始</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
