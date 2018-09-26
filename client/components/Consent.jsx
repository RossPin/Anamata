import React from 'react'
import { connect } from 'react-redux'
import { addConsent } from '../actions/youngPerson'
import { setStyle } from '../actions/style'

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
      <div>
        <h1>Consent</h1>
        <h3>Do you consent to this?</h3>
        <button value='Yes' onClick={this.submit} className='button'>Yes</button>
        <button value='No' onClick={this.submit} className='button'>No</button>
      </div>
    )
  }
  componentDidMount () {
    this.props.dispatch(setStyle('consent_stuf'))
  }
}

const mapStateToProps = ({ questions }) => {
  return { questions }
}

export default connect(mapStateToProps)(Consent)
