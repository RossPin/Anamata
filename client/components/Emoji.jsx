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
          <span><button className='emoji' id='sad' value='1' onClick={this.handleChange}> ☹️</button></span>
          <span><button className='emoji' id='semiSad' value='2' onClick={this.handleChange}> 🙁</button></span>
          <span><button className='emoji' id='neutral' value='3' onClick={this.handleChange}> 😐</button></span>
          <span><button className='emoji' id='semiHappy' value='4' onClick={this.handleChange}> 🙂</button></span>
          <span><button className='emoji' id='Happy' value='5' onClick={this.handleChange}> 😁</button></span>
        </div>
      </div>
    )
  }
}
export default Emoji
