import React from 'react'

class Emoji extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  tooltip (question) {
    const length = question.tooltip.wordArr.length
    return (
      <div className='tooltipQuestion'>{question.tooltip.wordArr.map((word, i) =>
        <div key={i} className='tooltipSection'>
          {question.tooltip.questionArr[i]} <div className='tooltip'>{word}<p className='tooltiptext'>{question.tooltip.defArr[i]}</p></div> {i === length - 1 && question.tooltip.questionArr[i + 1]}
        </div>
      )}
      </div>
    )
  }

  handleChange (e) {
    this.props.update(e, this.props.question.id, this.props.question)
  }

  render () {
    const { question } = this.props
    return (
      <div>
        {question.tooltip ? this.tooltip(question) : <h3>{question.question}</h3>}
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
