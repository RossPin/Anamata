import React from 'react'
import { connect } from 'react-redux'
import { resetYp } from '../actions/youngPerson'

class Complete extends React.Component {
  submit (e) {
    e.preventDefault()
    this.props.dispatch(resetYp())
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <h3>Survey Complete</h3>
        <button className='button' onClick={this.submit}>Finish</button>
      </div>
    )
  }
}

export default connect()(Complete)
