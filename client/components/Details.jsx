import React from 'react'
import { connect } from 'react-redux'
import { setDetails } from '../actions/youngPerson'
import { setStyle } from '../actions/style'

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
      ethnicityList: ['European/Pakeha', 'Maori', 'Asian', 'Pacific Islander', 'Other'],
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
    window.scrollTo(0, 0)
    this.props.dispatch(setStyle('details_background'))
  }

  updateDetails (e) {
    this.setState({
      details: { ...this.state.details, [e.target.name]: e.target.value }
    })

  }

  submit (e) {
    e.preventDefault()
    let details = this.state.details
    this.props.dispatch(setDetails(details))
    this.props.history.push('/consent')
  }

  updateRadio (e) {
    if (e.target.id === 'OtherEthnicity' || e.target.id === 'OtherGender') {
      this.setState({
        details: { ...this.state.details, [e.target.name]: 'Other - ' + e.target.value }
      })
    } else if (e.target.id === 'MaoriEthnicity') {
      this.setState({
        details: { ...this.state.details, [e.target.name]: 'Maori - ' + e.target.value }
      })
    } else if (e.target.id === 'Pacific IslanderEthnicity') {
      this.setState({
        details: { ...this.state.details, [e.target.name]: 'Pacific Islander - ' + e.target.value }
      })
    } else {
      this.setState({
        details: { ...this.state.details, [e.target.name]: e.target.value }
      })
    }
    console.log(this.state.details)
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
          <SliderDetails detail='Gender' name='gender' question={genderObj} detailState={details.gender} onChange={e => this.updateDetails(e)} />
          <div className='textDetails'>
            <label htmlFor='dob'>Birthday</label>
            <input type='date' id='dob' name='dob' onChange={e => this.updateDetails(e)} className='birthInput' />
          </div>
          <TextDetails detail='Address' name='address' onChange={this.updateDetails} />
          <TextDetails detail='School' name='school' onChange={this.updateDetails} />
          <TextDetails detail='Mobile' name='mobile' onChange={this.updateDetails} />
        </form>
        <input className='button' type='submit' value='Next' onClick={this.submit} />
      </div>
    )
  }
}

const TextDetails = ({ detail, name, onChange }) =>
  <div className='detailsDiv textDetails'>
    <label htmlFor={name}>{detail}</label>
    <input className='textDetailsInput' id={name} type='text' name={name} onChange={onChange} />
  </div>

const RadioDetails = ({ detail, radioList, name, detailState, onChange }) =>
  <div className='detailsDiv radioDetails'>
    <label>{detail}</label>
    {radioList.map((item, i) => (
      <div key={i}>
        {item === 'Other' || item === 'Maori' || item === 'Pacific Islander'
          ? <div className='otherSection'>
            <input type='radio' className='otherRadio' id={'radio' + item} name={name} onChange={e => onChange(e)}
              value={item} checked={detailState.includes(item)} />
            <label htmlFor={'radio' + item}>{item}</label>
            { detailState.includes(item)
              ? <input className='radioOtherInput' id={item + detail} type='text' placeholder={item === 'Maori' ? 'Iwi' : 'Country'} name={name} onChange={e => onChange(e)} />
              : <div />}
          </div>
          : <div>
            <input className='radioDetailsInput' id={'radio' + item} type='radio' name={name} onChange={e => onChange(e)}
              value={item} checked={item === detailState} />
            <label htmlFor={'radio' + item}>{item}</label>
          </div>
        }
      </div>
    ))}
  </div>

const SliderDetails = ({ detail, question, answer, onChange }) =>
  <div className='sliderDetails'>
    <label>{detail}</label>
    <div>
      {question.tooltip ? this.tooltip(question) : <h3>{question.question}</h3>}
    </div>
    <div className='sliderLabels'>
      <input className='slider' type='range' min='0' max='100' value={answer} onChange={e => onChange(e)} />
      <b className='sliderLabelLeft'>{question.responses.left}</b>
      <b className='sliderLabelRight'>{question.responses.right}</b>
    </div>
  </div>

export default connect()(Details)
