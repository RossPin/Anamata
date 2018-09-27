import React from 'react'
import { connect } from 'react-redux'
import { registerUserRequest } from '../../actions/register'
import { setStyle } from '../../actions/style'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirmPassword: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateDetails (e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  submit (e) {
    e.preventDefault()
    e.target.reset()
    let { username, password, confirmPassword } = this.state
    if (password === confirmPassword) this.props.dispatch(registerUserRequest({ username, password }))
  }
  render () {
    return (
      <form className='registerForm'onSubmit={this.submit}>
        <h2>Register</h2>
        <label className='registerLabel'>Username:
          <input className='registerInput' style={{ margin: '0.5vw' }} type='text' name='username' onChange={this.updateDetails} />
        </label><br />
        <label className='registerLabel'>Password:
          <input className='registerInput' style={{ margin: '0.5vw' }} type='password' name='password' onChange={this.updateDetails} />
        </label><br />
        <label className='registerLabel'>Confirm:
          <input className='registerInput' style={{ margin: '0.5vw' }} type='password' name='confirmPassword' onChange={this.updateDetails} />
        </label><br />
        <input className='button' type='submit' />
      </form>
    )
  }
  componentDidMount () {
    this.props.dispatch(setStyle('register_background'))
  }
}

export default connect()(Register)
