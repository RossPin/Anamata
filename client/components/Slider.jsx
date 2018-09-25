import React from 'react'

class Slider extends React.Component {
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
    this.props.update(e, this.props.question.id, this.props.question.question)
  }

  render () {
    const { question } = this.props
    return (
      <div>
        {question.tooltip ? this.tooltip(question) : <h3>{question.question}</h3>}
        <div>
          <input type='range' min='1' max='100' value={this.props.answer} onChange={this.handleChange} className='slider' id='myRange' />
        </div>
      </div>
    )
  }
}

export default Slider
