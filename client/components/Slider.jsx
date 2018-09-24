import React from 'react'

class Slider extends React.Component {
  render () {
    const { question, update, answer } = this.props
    return (
      <div>
        <h3> { question.question } </h3>
        <div>
          {question.responses.left}
          <input type='range' min='1' max='100' value={answer} onChange={e => update(e, question.id, question.question)} className='slider' />
          {question.responses.right}
        </div>
      </div>
    )
  }
}

export default Slider
