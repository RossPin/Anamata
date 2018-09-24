import React from 'react'
import { connect } from 'react-redux'
import { addConsent } from '../actions/youngPerson'

class Consent extends React.Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit (e) {
    e.preventDefault()
    const consent = (e.target.value === 'Yes')
    this.props.dispatch(addConsent(consent, Date.now()))
    this.props.history.push('/questions')
  }

  render () {
    return (
      <div className='consent'>
        <h1>Know your rights!</h1>
        <img src='./img/video.png' />
        <p>Input paragraph about consent ra ra ra </p>
        <h3>Do you consent to this?</h3>
        <button value='Yes' onClick={this.submit} className='button'>I accept</button>
        <button value='No' onClick={this.submit} className='button'>I decline</button>
      </div>
    )
  }
}

const mapStateToProps = ({ questions }) => {
  return { questions }
}

export default connect(mapStateToProps)(Consent)
