import React from 'react'

class Dropdown extends React.Component {
  render () {
    // eslint-disable-next-line
    const { question, update, answer } = this.props
    return (
      <div>
        <h3>{question.question}</h3>
        <form>
          {question.responses.map((response, i) => (
            <div key={i}>
              <input type='dropdown' name='answer' onChange={e => update(e, question.id, question.question, response.show, response.hide)}
                value={response.answer} checked={answer === response.answer} />{response.answer}<br />
            </div>
          ))}
        </form>
      </div>
    )
  }
}

export default Dropdown
