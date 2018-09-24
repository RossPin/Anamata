import React from 'react'

class TextForm extends React.Component {
  render () {
    const { question, update, answer } = this.props
    return (
      <div>
        <form>
          <label>{question.question}<br />
            <input type='text' value={answer} onChange={e => update(e, question.id, question.question)} />
          </label>
        </form>
      </div>
    )
  }
}

export default TextForm
