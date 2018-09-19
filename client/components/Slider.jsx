import React from 'react'

class Slider extends React.Component {
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
        <h3>{this.props.question.question}</h3>
        <div className='sonliderContainer'>
          <input type='range' min='1' max='100' value={this.props.answer} onChange={this.handleChange} className='slider' id='myRange' />
        </div>
      </div>
    )
  }
}

export default Slider
