import React, { Component } from 'react'
import * as style from './style.less'
import { NavBar, Icon } from 'antd-mobile'
import { ResponsiveContainer, BarChart, XAxis, Bar, Cell } from 'Recharts'
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

class Calculate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const { factors, options } = this.props
    const data = []
    let factorsObj = {}
    factors.forEach(item => {
      factorsObj[item.text] = item.proportion
    })
    options.forEach(item => {
      let score = 0
      item.stars.forEach(item1 => {
        score += item1.value * factorsObj[item1.key]
      })
      data.push({
        name: item.text,
        score
      })
    })
    this.setState({
      data
    })
  }

  render() {
    const { question } = this.props
    const { data } = this.state

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
        <div className={style.calculate}>
          <div className={style.question}>问题：{question}</div>
          <div className={style.title}>各候选项的综合得分如下</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" tickLine={false} />
              <Bar dataKey="score" fill="#8884d8" label={{ position: 'top' }}>
                {
                  data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % 20]} />
                  ))
                }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
  }
}

export default Calculate
