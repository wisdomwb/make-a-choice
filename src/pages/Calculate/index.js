import React, { Component } from 'react'
import * as style from './style.less'
import { NavBar, Icon } from 'antd-mobile'
import { ResponsiveContainer, BarChart, XAxis, Bar, Cell, LabelList } from 'Recharts'
import { getF1 } from '../../utils'
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
      factorsObj[item.text] = item.proportion / 100
    })
    options.forEach(item => {
      let score = 0
      item.stars.forEach(item1 => {
        score += item1.value * factorsObj[item1.key]
      })
      data.push({
        name: item.text,
        score: getF1(score),
      })
    })
    this.setState({
      data
    })
  }

  renderLabel(props) {
    const { x, y, width, height, value } = props
    const radius = 10
    return (
      <text x={x + width / 2} y={y - radius} fill="#f00" textAnchor="middle" dominantBaseline="middle">
        {value + '星'}
      </text>
    )
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
        >决策</NavBar>
        <div className={style.calculate}>
          <div className={style.question}>问题：{question}</div>
          <div className={style.title}>各候选项的综合得分如下</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" tickLine={false} />
              <Bar dataKey="score" fill="#8884d8" >
                <LabelList dataKey="score" content={this.renderLabel} />
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
