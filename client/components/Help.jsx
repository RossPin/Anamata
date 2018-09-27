import React from 'react'
import { connect } from 'react-redux'
import { setStyle } from '../actions/style'

class Help extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      feedback: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
  }

  updateDetails (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div className='container help'>
        <h1>Youth Health Assessment:</h1>
        <p>
          We know its important to develop an understanding of health and learn ways to find help for our health needs. We also know that during the ages of 13-17 especially your health, including physical and emotional go through significant changes.
          A number of factors influence our health so the HEADSS assessment covers some of the areas that can have a positive, as well as a negative impact on your health.
          <br />
          HEADSS is an assessment that covers Home, Education, Activities, drugs (substances), sex and sexuality, safety (including mental health).
          <br />
          What happens? We’ve developed this confidential screening tool, you’ll be asked a range of questions regarding the above topics. But most importantly we want you to share what areas of health are most important to you and if you’d like any support.
          <br />
          After you’ve completed the questions you’ll receive a summary and you’ll have the opportunity to catch up with the nurse, doctor or health professional who works at your school clinic.
        </p>
        <div className='helpfeedback'>
          <h1>Feedback</h1>
          <form onSubmit={this.submit}>
            <TextDetails detail='Name' name='name' onChange={this.updateDetails} />
            <TextDetails detail='Email' name='email' onChange={this.updateDetails} />
            <Feedback detail='Feedback' name='feedback' onChange={this.updateDetails} className='feedback' />
            <input className='button' type='submit' value='Submit' />
          </form>
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.props.dispatch(setStyle('help_background'))
  }
}

const TextDetails = ({ detail, name, onChange, className }) =>
  <div className='textDetails'>
    <label className='label' htmlFor={name}>{detail}</label>
    <input className={className} id={name} type='text' name={name} onChange={onChange} />
  </div>

const Feedback = ({ detail, name, onChange, className }) =>
  <div className='textDetails'>
    <label className='label' htmlFor={name}>{detail}</label>
    <textarea className='textinput' cols="40" rows="5"  id={name} type='text' name={name} onChange={onChange}></textarea>
  </div>

export default connect()(Help)
