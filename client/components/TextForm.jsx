import React from 'react'

class TextForm extends React.Component {
  render () {
    const { question, update, answer } = this.props
    return (
      <div>
        <h3>{question.question}</h3>
        <form>
          <input type='text' value={answer} onChange={e => update(e, question.id, question.question)} /> 
        </form>
      </div>
    )
  }
}

export default TextForm
