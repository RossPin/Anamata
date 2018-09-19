import React from 'react'

class Slider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: ''
    }
    // this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.setState({
      answer: e.target.value
    })
  }
  render () {
    return (
      <div className='sonliderContainer'>
        <input type='range' min='1' max='100' value={this.state.answer} onChange={(e) => { this.handleChange(e) }} className='slider' id='myRange' />
        <h4 id='result'>result:{this.state.answer}</h4>
      </div>
    )
  }
}

export default Slider
