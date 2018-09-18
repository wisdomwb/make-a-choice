import React from 'react'
import { Icon, Button, WhiteSpace } from 'antd-mobile'
import * as style from './Home.less'

const Home = (props) => {
  const clickStart = () => {
    props.history.push('/question')
  }
  return (
    <div className={style.home}>
      <div className={style.title}>Make A Choice</div>
      <div className={style.content}>
        我们总是面临一些这样的选择，它们牵扯到多个因素，而且有多个可供选择的方向。如果我们仓促决定，难免日后追悔。<br />
        这款小应用可以帮助你分配影响因素的权重，评价各种选项的优势，然后根据数据做出较理性的推荐。
          </div>
      <div className={style.footer}>
        <Button type='primary' onClick={clickStart}>开始</Button>
      </div>
    </div>
  )
}

export default Home
