import React from 'react'
import {connect} from 'react-redux'
import { createYp } from '../actions/youngPeople'

class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      school: ''      
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    e.target.reset()
    let {firstName, lastName, school} = this.state
    this.props.dispatch(createYp({firstName, lastName, school}))
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        <label>First Name:
          <input style={{margin: '0.5vw'}} type="text" name="firstName" onChange={this.updateDetails}/>
        </label><br/>        
        <label>Last Name:
          <input style={{margin: '0.5vw'}} type="text" name="lastName" onChange={this.updateDetails}/>
        </label><br/>
        <label>School:
          <input style={{margin: '0.5vw'}} type="text" name="school" onChange={this.updateDetails}/>
        </label><br/>
          <input className="button" type="submit" />
      </form>
    )
  }
}

export default connect()(Details)
