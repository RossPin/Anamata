import React from 'react'

class Radio extends React.Component {
  render () {
    const { question, update, answer } = this.props
    return (
      <div>
        <h3>{question.question}</h3>
        <form>
          <input type='radio' name='answer' onChange={e => update(e, question.id, question.question, response.show, response.hide)}
            value='Yes' checked={answer === 'Yes'} />Yes
          <input type='radio' name='answer' onChange={e => update(e, question.id, question.question, response.show, response.hide)}
            value='No' checked={answer === 'No'} />No
          {(answer === question.ifSo.req) && <label>{question.ifSo.question}<br />
            <input type='text' />
          </label>}
        </form>
      </div>
    )
  }
}

export default Radio
