import React from 'react'
import { connect } from 'react-redux'
import { resetYp, createYp } from '../actions/youngPerson'

class Complete extends React.Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  componentDidMount () {
    createYp(this.props.youngPerson)
  }

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

const mapStateToProps = ({ youngPerson }) => ({ youngPerson })

export default connect(mapStateToProps)(Complete)
