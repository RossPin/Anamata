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
      <div className='qDiv' data-aos='fade-right'>
        <div className='speech-bubble'>
          <h3>{question.question}</h3>
        </div>
        <form data-aos='fade-left'>
          {question.responses.map((response, i) => (
            <div className='checkbox' key={i}>
              <label>
                <input type='checkbox' name='answer'
                  value={response.answer} checked={answer[response.answer] ? answer[response.answer] : false} onChange={e => update(e, question)} />
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
