import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/login'
import { setStyle } from '../../actions/style'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateDetails (e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  submit (e) {
    e.preventDefault()
    let { username, password } = this.state
    this.props.dispatch(loginUser({ username, password }))
      .then(response => {
        if (response.success) this.props.history.push('/current')
      })
  }
  render () {
    return (
      <form className='Login' onSubmit={this.submit}>
        <h2>Login details</h2>
        <label className='loginLabel'>Username:
          <input className='loginInput' style={{ margin: '0.5vw' }} type='text' name='username' onChange={this.updateDetails} />
        </label><br />
        <label className='loginLabel'>Password:
          <input className='loginInput' style={{ margin: '0.5vw' }} type='password' name='password' onChange={this.updateDetails} />
        </label><br />
        <input className='button' type='submit' />
      </form>
    )
  }
  componentDidMount () {
    this.props.dispatch(setStyle('login_background'))
  }
}

export default connect()(Login)
