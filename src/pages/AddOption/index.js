import React, { Component } from 'react'
import * as style from './style.less'
import { Tag, InputItem, Toast, Button, NavBar, Icon } from 'antd-mobile'
import { PieChart, Pie, Sector, Cell } from 'Recharts'

class AddOption extends Component {
  componentDidMount() {
    this.inputRef.focus()
  }

  //点击添加
  addOption() {
    let value = this.inputRef.state.value.trim()
    if (!value) {
      Toast.info('请输入内容')
      return
    }
    this.props.addOption(value)
    this.inputRef.state.value = ''
    this.inputRef.focus()
  }

  //移除标签
  remove(text) {
    console.log('remove')
    this.props.removeOption(text)
  }

  clickNext() {
    if (!this.props.options.length) {
      Toast.info('请至少添加一个标签')
      return
    }
    // this.props.history.push('/divideproportion')
  }

  render() {
    const { question, options } = this.props


    const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };


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
        <div className={style.addOption}>
          <div className={style.question}>问题：{question}</div>
          <PieChart width={400} height={200} onMouseEnter={this.onPieEnter}>
            <Pie
              data={data}
              cx={200}
              cy={100}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
            >
              {
                data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} key={index} />)
              }
            </Pie>
          </PieChart>
          <div className={style.title}>参照以上因素添加后选项</div>
          <div className={style.tagContainer}>
            {
              options.map((item, index) => {
                return <Tag closable key={item.text}
                  onClose={(a) => {
                    this.remove(item.text)
                  }}
                  afterClose={() => {
                    // console.log('afterClose');
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
          <Button type='primary' onClick={this.addOption.bind(this)} style={{ margin: '20px 0' }}>添加</Button>
          <Button type='primary' onClick={this.clickNext.bind(this)} style={{ margin: '20px 0 0' }}>下一步</Button>
        </div>
      </div>
    )
  }
}

export default AddOption
