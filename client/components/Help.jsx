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
        <h1>What is HEADDSS?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi vulputate semper nulla. Nullam porttitor quam iaculis augue
          dignissim imperdiet. Suspendisse tellus turpis, blandit non nisi in,
          facilisis sodales ipsum. Fusce interdum sit amet nunc a eleifend.
          Aenean dictum, ipsum quis vehicula ultricies, nunc magna sodales
          purus, ac convallis enim augue hendrerit eros. Ut nibh est, ultrices
          nec augue ullamcorper, pretium varius nisl. Nulla purus dolor,
          venenatis eget metus et, dignissim rhoncus velit.
          Vivamus tincidunt nunc ut magna laoreet bibendum.
          Pellentesque lobortis maximus mauris, eget posuere ante luctus vel.
          In hac habitasse platea dictumst. Morbi vitae nulla vitae nulla
          molestie aliquet vel in erat. Nulla dignissim at ex pretium finibus.
          Phasellus eu enim tempus, tristique justo fermentum, elementum nulla.
        </p>
        <div className='helpfeedback'>
          <h1>Feedback</h1>
          <form onSubmit={this.submit}>
            <TextDetails detail='Name' name='name' onChange={this.updateDetails} />
            <TextDetails detail='Email' name='email' onChange={this.updateDetails} />
            <TextDetails detail='Feedback' name='feedback' onChange={this.updateDetails} className='feedback' />
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

export default connect()(Help)
