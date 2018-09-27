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
        <h1>Know Your Rights!</h1>
        <img src='img/video.png' alt='vidimg' width='500' />
        <p>The information you provide here will remain completely private
          between yourself and the school nurse. Any other information that
          needs to be followed up will be discussed with you first.<br /><div>
            However, if there are any immediate concerns for your safety
          we will need to see you as soon as possible, and other adults may be
          asked by us to be involved to provide further support.</div></p>
        <div className='consent-form'>
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
