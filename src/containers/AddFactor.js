import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as style from './AddFactor.less'

class AddFactor extends Component {
  render() {
    const { question } = this.props
    return (
      <div className={style.addFactor}>
        <div className={style.question}>问题：{question}</div>
        <div className={style.title}>影响做出选择的因素有哪些？</div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.question
  }
}
export default connect(mapStateToProps)(AddFactor)
