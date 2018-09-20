import React from 'react'
import { connect } from 'react-redux'
import Radio from './Radio'
import questions from '../data/sample.json'

class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answers: {},
      questions: questions
    }
    this.updateSelection = this.updateSelection.bind(this)
    this.submit = this.submit.bind(this)
  }

  updateSelection (e, id, question, show, hide) {
    const questions = this.state.questions
    if (show) questions.find(q => q.id === show).conditional = false
    if (hide) questions.find(q => q.id === hide).conditional = true
    const { answers } = this.state
    answers[id] = { id, question, answer: e.target.value }
    this.setState({ answers })
  }

  submit (e) {
    e.preventDefault()
    console.log(this.state.answers)
    this.props.history.push('/complete')
  }

  render () {
    const answers = this.state.answers
    return (
      <div>
        {this.state.questions.map(question => (
          <div key={question.id}>
            {!question.conditional && <Radio question={question} answer={answers[question.id] ? answers[question.id].answer : null}
              update={this.updateSelection} submit={this.submit} />}
          </div>
        ))}
        <button className='button' onClick={this.submit} >Submit</button>
      </div>
    )
  }
}

const mapStateToProps = ({ questions }) => {
  return { questions }
}

export default connect(mapStateToProps)(Question)
