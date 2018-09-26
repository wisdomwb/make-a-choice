import React, { Component } from 'react'
import * as style from './style.less'
import { Toast, Button, NavBar, Icon } from 'antd-mobile'
import Table from 'rc-table'
import 'rc-table/assets/index.css'
import Rate from '../../components/Rate'

class Mark extends Component {

  clickNext() {
    this.props.history.push('/calculate')
  }

  onChangeValue(record, factor, value) {
    this.props.changeValue({ factor, option: record.key, value })
  }

  //获取表头及渲染方式
  getColumns(factors) {
    const columns = []
    columns.push({
      title: '候选项',
      key: 'key',
      dataIndex: 'key',
      align: 'center',
    })
    factors.forEach(factor => {
      const obj = {
        title: factor.text,
        key: factor.text,
        dataIndex: factor.text,
        align: 'center',
        render: (item, record) => <div><Rate value={item} onChange={this.onChangeValue.bind(this, record, factor.text)} /></div>
      }
      columns.push(obj)
    })
    return columns
  }

  //获取表格数据
  getData(options) {
    const data = []
    options.forEach(option => {
      let obj = {}
      obj.key = option.text
      option.stars.forEach(item1 => {
        obj[item1.key] = item1.value
      })
      data.push(obj)
    })
    return data
  }
  render() {
    const { question, factors, options } = this.props
    return (
      <div >
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.props.history.goBack}
        >打分</NavBar>
        <div className={style.mark}>
          <div className={style.question}>问题：{question}</div>
          <Table columns={this.getColumns(factors)} data={this.getData(options)} rowKey='key' scroll={{ x: true }} />
          <Button type='primary' onClick={this.clickNext.bind(this)} style={{ margin: '20px 0 0' }}>下一步</Button>
        </div>
      </div>
    )
  }
}

export default Mark
