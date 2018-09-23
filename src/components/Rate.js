import React, { Component } from 'react'
import CustomIcon from './CustomIcon'
import star from '../../public/star.svg'

class Rate extends Component {

  clickStar(i) {
    const { value = 0, onChange } = this.props
    if (i + 1 === value) {
      onChange(0)
    } else {
      onChange(i + 1)
    }
  }
  renderContent() {
    const { count = 5, value = 0, onChange } = this.props
    const result = []
    for (let i = 0; i < count; i++) {
      const style = { color: i + 1 <= value ? '#f00' : '#999' }
      result.push(<CustomIcon type={star} key={i} onClick={this.clickStar.bind(this, i)} style={style} />)
    }
    return result
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default Rate