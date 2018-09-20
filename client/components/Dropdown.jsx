import React from 'react'

class Dropdown extends React.Component {
  render () {
    // eslint-disable-next-line
    const { question, update, answer } = this.props
    return (
      <div>
        <h3>{question.question}</h3>
        <select onChange={e => update(e, question.id, question.question)}>
          {question.responses.map((response, i) => (
            <option key={i} value={response.answer}>{response.answer}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default Dropdown
