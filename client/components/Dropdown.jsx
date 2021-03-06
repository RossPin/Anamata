import React from 'react'

class Dropdown extends React.Component {
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

  render () {
    // eslint-disable-next-line
    const { question, update, answer } = this.props
    return (
      <div>
        {question.tooltip ? this.tooltip(question) : <h3>{question.question}</h3>}
        <select onChange={e => update(e, question.id, question)} >
          {question.responses.map((response, i) => (
            <option key={i} value={response.answer}>{ response.answer }</option>
          ))}
        </select>
      </div>
    )
  }
}

export default Dropdown
