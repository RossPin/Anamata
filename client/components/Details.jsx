import React from 'react'
import { connect } from 'react-redux'
import { setDetails } from '../actions/youngPerson'
import { setStyle } from '../actions/style'
import Slider from './Slider'

class Details extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      details: {
        firstName: '',
        lastName: '',
        prefName: '',
        ethnicity: '',
        gender: '',
        dob: '',
        age: '',
        address: '',
        mobile: '',
        school: ''
      },
      ethnicityList: ['European/Pakeha', 'New Zealand Maori', 'Asian', 'Pacific Islander', 'South African', 'Fillipino', 'Other'],
      genderObj: {
        question: ' Indicate where you think you see yourself on this sliding scale:',
        id: 'genderDetails',
        responses:
            {
              right: 'Female',
              left: 'Male',
              check: 'I don\'t know'
            }
      }
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
    this.updateRadio = this.updateRadio.bind(this)
  }
  
  componentDidMount () {
    this.props.dispatch(setStyle('details_stuf'))
  }
  
  updateDetails (e) {
    this.setState({
      details: { ...this.state.details, [e.target.name]: e.target.value }
    })
  }
  
  submit (e) {
    e.preventDefault()
    e.target.reset()
    let details = this.state.details
    this.props.dispatch(setDetails(details))
    this.props.history.push('/consent')
  }

  updateRadio (e) {
    if (e.target.id === 'OtherEthnicity' || e.target.id === 'OtherGender') {
      this.setState({
        details: { ...this.state.details, [e.target.name]: 'Other - ' + e.target.value }
      })
    } else {
      this.setState({
        details: { ...this.state.details, [e.target.name]: e.target.value }
      })
    }
  }

  updateDOB (e) {
    const dob = e.target.value
    this.setState({
      dob
    })
  }

  render () {
    const { genderObj, details } = this.state
    return (
      <div className='details'>
        <h1>About You</h1>
        <form onSubmit={this.submit}>
          <TextDetails detail='First Name' name='firstName' onChange={this.updateDetails} />
          <TextDetails detail='Last Name' name='lastName' onChange={this.updateDetails} />
          <TextDetails detail='Preferred Name' name='prefName' onChange={this.updateDetails} />
          <RadioDetails detail='Ethnicity' radioList={this.state.ethnicityList} name='ethnicity' detailState={this.state.details.ethnicity} onChange={this.updateRadio} />
          <Slider name='gender' question={genderObj} answer={details.gender} update={e => this.updateDetails(e)} />
          <label>Birthday:
            <input type='date' name='dob' onChange={e => this.updateDetails(e)} className='birthInput'/>
          </label><br />
          <TextDetails detail='Address' name='address' onChange={this.updateDetails} />
          <TextDetails detail='School' name='school' onChange={this.updateDetails} />
          <TextDetails detail='Mobile' name='mobile' onChange={this.updateDetails} />
          <input className='button' type='submit' />
        </form>
      </div>
    )
  }  
}

const TextDetails = ({ detail, name, onChange }) =>
  <div className='textDetails'>
    <label>{detail}:
      <input style={{ margin: '0.5vw' }} type='text' name={name} onChange={onChange} />
    </label><br />
  </div>

const RadioDetails = ({ detail, radioList, name, detailState, onChange }) =>
  <div className='radioDetails'>
    {detail}:
    {radioList.map((item, i) => (
      <div key={i}>
        {item === 'Other'
          ? <div className='otherSection'>
            <input type='radio' className='otherRadio' name={name} onChange={e => onChange(e)}
              value={item} checked={detailState.includes(item)} />
            {item}
            <input id={'Other' + detail} style={{ margin: '0.5vw' }} type='text' name={name} onChange={e => onChange(e)} />
          </div>
          : <div>
            <input className='radioDetailsInput' type='radio' name={name} onChange={e => onChange(e)}
              value={item} checked={item === detailState} />
            {item}
          </div>
        }
      </div>
    ))}
  </div>

export default connect()(Details)
