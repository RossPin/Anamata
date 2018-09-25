import React from 'react'

class Slider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      check: false
    }
    this.updateCheck = this.updateCheck.bind(this)
  }

  updateCheck (e, update, id, question) {
    if (e.target.type === 'checkbox') {
      this.setState(prevState => ({
        check: !prevState.check
      }))
    } else {
      this.setState({
        check: false
      })
    }
    console.log(id)
    if (id === 'genderDetails') {
      let gender = e
      gender.target.name = 'gender'
      update(gender)
    } else {
      update(e, id, question)
    }
  }

  render () {
    const { question, update, answer } = this.props
    return (
      <div>
        <h3> { question.question } </h3>
        <div>
          {question.responses.left}
          <input type='range' min='1' max='100' value={answer} onChange={e => this.updateCheck(e, update, question.id, question.question)} className='slider' />
          {question.responses.right}
        </div>
        {'check' in question.responses
          ? <label>
            <input type='checkbox' name='answer'
              value={question.responses.check} checked={this.state.check} onChange={e => this.updateCheck(e, update, question.id, question.question)} />
            {question.responses.check}
          </label>
          : null }
      </div>
    )
  }
}

export default Slider
