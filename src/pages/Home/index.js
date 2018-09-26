import React from 'react'
import { Button } from 'antd-mobile'
import * as style from './style.less'

const Home = (props) => {
  const clickStart = () => {
    props.history.push('/question')
  }
  return (
    <div className={style.home}>
      <div className={style.title}>Make A Choice</div>
      <div className={style.content}>
        你有时候会面临困难的选择，让这款小应用来帮你解决它！
      </div>
      <div className={style.footer}>
        <Button type='primary' onClick={clickStart}>开始</Button>
      </div>
    </div>
  )
}

export default Home
