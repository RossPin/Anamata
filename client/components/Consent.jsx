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
    if (consent) {
      this.props.history.push('/questions')
    } else {
      this.props.history.push('/complete')
    }
  }

  render () {
    return (
      <div className='consent'>
        <h1>Know your rights!</h1>
        <img src='img/video.png' alt='vidimg' width='500' />
        <p>The information you provide here will remain completely private between yourself and the school nurse.  Any other information that needs to be followed up will be discussed with you first.
          <br />HOWEVER IF THERE ARE ANY IMMEDIATE CONCERNS FOR YOUR SAFETY WE WILL NEED TO SEE YOU AS SOON AS POSSIBLE AND OTHER ADULTS MAY BE ASKED BY US TO BE INVOLVED TO PROVIDE FURTHER  SUPPORT. </p>
        <div class='consent-form'>
          <h3>Do you consent to this?</h3>
          <button value='Yes' onClick={this.submit} className='button'>Yes</button>
          <button value='No' onClick={this.submit} className='button'>No</button>
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.props.dispatch(setStyle('consent_background'))
  }
}

const mapStateToProps = ({ questions }) => {
  return { questions }
}

export default connect(mapStateToProps)(Consent)
