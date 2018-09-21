import React from 'react'

class Listing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: ''
    }
    this.submit = this.submit.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
  }
  updateDetails (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit (e) {
    e.preventDefault()
    this.props.update(this.state.input, this.props.question.id, this.props.question.question)
  }

  render () {
    // eslint-disable-next-line
    const { question, update, answer } = this.props
    return (
      <div>
        <h3> { question.question } </h3>
        <ul>
          { answer.map((val, i) => (
            <div key={i}>
              <li>{val}</li>
            </div>
          ))}
        </ul>
        <form onSubmit={this.submit}>
          <input type='text' placeholder='type here' name='input'
            onChange={this.updateDetails}
            value={this.state.input} />
          <div>
            <input type='Submit' />
          </div>
        </form>
      </div>
    )
  }
}

export default Listing
