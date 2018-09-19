import React from 'react'

class Radio extends React.Component {
  render () {
    const { question, update, answer } = this.props
    return (
      <div>
        <h3>{question.question}</h3>
        <form>
          {question.responses.map((response, i) => (
            <div key={i}>
              <input type='radio' name='answer' onChange={e => update(e, question.id, question.question)}
                value={response.answer} checked={answer === response.answer} />{response.answer}<br />
            </div>
          ))}
        </form>
      </div>
    )
  }
}

export default Radio
