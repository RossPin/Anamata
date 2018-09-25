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
        <p>As a patient, you have the right to be told everything about your health and the care that you are receiving.
            Whatever procedure you are to undergo, your consent or agreement is needed before the procedure takes place. This is referred to as Informed Consent. In some cases e.g. if you are taking part in any research or if you are to go under general anaesthetic, you will be asked for your written consent (i.e. you will be asked to sign a consent form).
            Before giving your consent, your doctor or healthcare provider will fully and clearly explain to you: what happens during the procedure; what other options there might be; what you can expect after the procedure; and any risks that may be associated with the procedure. You can also ask any questions that you may have about the procedure.
            For more information on Informed Consent, please refer to ’Right 7’ of the Code of Health and Disability Services Consumers’ Rights </p>
        <h3>Do you consent to this?</h3>
        <button value='Yes' onClick={this.submit} className='button'>Yes</button>
        <button value='No' onClick={this.submit} className='button'>No</button>
      </div>
    )
  }
}

const mapStateToProps = ({ questions }) => {
  return { questions }
}

export default connect(mapStateToProps)(Consent)
