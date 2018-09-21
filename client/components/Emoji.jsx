import React from 'react'

class Emoji extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.props.update(e, this.props.question.id, this.props.question.question)
  }

  render () {
    return (
      <div>
        <div>{this.props.question.question}</div>
        <div>
          <span><button className='emoji' id='sad' value='sad' onClick={this.handleChange}> ☹️</button></span>
          <span><button className='emoji' id='semiSad' value='semiSad' onClick={this.handleChange}> 🙁</button></span>
          <span><button className='emoji' id='neutral' value='neutral' onClick={this.handleChange}> 😐</button></span>
          <span><button className='emoji' id='semiHappy' value='semiHappy' onClick={this.handleChange}> 🙂</button></span>
          <span><button className='emoji' id='happy' value='happy' onClick={this.handleChange}> 😁</button></span>
        </div>
      </div>
    )
  }
}
export default Emoji
