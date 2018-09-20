import React from 'react'

class Radio extends React.Component {
  render () {
    // eslint-disable-next-line
    const { question, update, answer } = this.props
    return (
      <div>
        <h3> { question.question } </h3>
        <form>
          { question.responses.map((response, i) => (
            <div key={i}>
              <input type='radio' name='answer' onChange={e => update(e, question.id, question.question, response.show, response.hide)}
                value={response.answer} checked={answer === response.answer} />{response.answer}
            </div>
          ))}
        </form>
      </div>
    )
  }
}

export default Radio
