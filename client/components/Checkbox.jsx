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

  render () {
    const { question, update, answer } = this.props
    return (
      <div>
        <div className='speech-bubble'>
          <h3>{question.question}</h3>
        </div>
        <form>
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
