import React from 'react'

class Checkbox extends React.Component {
  handleChange (e, i) {
    const target = e.target
    const value = target.checked
    let checkboxes = this.state.checkboxes
    checkboxes[i].value = value
    this.setState({
      checkboxes: checkboxes
    })
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

  render () {
    const { question, update, answer } = this.props
    return (
      <div>
        {question.tooltip ? this.tooltip(question) : <h3>{question.question}</h3>}
        <form className='control'>
          {question.responses.map((response, i) => (
            <div key={i}>
              <label className='checkbox'>
                <input type='checkbox' id='answer' name='answer'
                  value={response.answer} checked={answer[response.answer]
                    ? answer[response.answer] : false} onChange={e => update(e, question)} />
                <svg width='20' height='20' viewBox='0 0 20 20'>
                  <rect width='20' height='20' />
                  <path d='M2 2 H 18 V 18 H 2 L 2 2' class='inner' />
                  <path d='M4 4 H 20 V 20 H 4 L 4 4' class='outer' />
                </svg>
                {response.answer}
              </label>
            </div>
          ))}
        </form>
      </div>
    )
  }
}

export default Checkbox
