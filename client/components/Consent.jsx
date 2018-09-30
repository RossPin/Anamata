import React from 'react'
import { connect } from 'react-redux'
import { addConsent } from '../actions/youngPerson'
import { setStyle } from '../actions/style'
import ModalConsent from './ModalConsent'

class Consent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.submit = this.submit.bind(this)
    this.decline = this.decline.bind(this)
    this.cancel = this.cancel.bind(this)
  }

  componentDidMount () {
    if (!this.props.youngPerson.details) this.props.history.push('/details')
    this.props.dispatch(setStyle('consent_background'))
    window.scrollTo(0, 0)
  }

  submit (e) {
    e.preventDefault()
    const consent = (e.target.value === 'Yes')
    if (consent) {
      this.props.dispatch(addConsent(consent, Date.now()))
      this.props.history.push('/questions')
    } else {
      this.setState({ showModal: true })
    }
  }

  decline (e) {
    e.preventDefault()
    this.props.dispatch(addConsent(false, Date.now()))
    this.props.history.push('/complete')
    this.setState({ showModal: false })
  }

  cancel (e) {
    e.preventDefault()
    this.setState({ showModal: false })
  }

  render () {
    return (
      <div className='consent'>
        <h1>Know Your Rights!</h1>
        <img src='img/video.png' alt='vidimg' width='500' />
        <p>
          The information you provide here will remain completely private
          between yourself and the school nurse. Any other information that
          needs to be followed up will be discussed with you first.
        </p>
        <p>
          However, if there are any immediate concerns for your safety
          we will need to see you as soon as possible, and other adults may be
          asked by us to be involved to provide further support.
        </p>
        <div className='consent-form'>
          <h3>Do you consent to this?</h3>
          <button value='Yes' onClick={this.submit} className='button'>Yes</button>
          <button value='No' onClick={this.submit} className='button'>No</button>
        </div>
        {this.state.showModal && <ModalConsent decline={this.decline} cancel={this.cancel} />}
      </div>
    )
  }
}

const mapStateToProps = ({ youngPerson }) => {
  return { youngPerson }
}

export default connect(mapStateToProps)(Consent)
