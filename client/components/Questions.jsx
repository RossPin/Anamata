import React from 'react'
import { connect } from 'react-redux'
import Radio from './Radio'
import Slider from './Slider'
import Dropdown from './Dropdown'
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
    this.renderQuestion = this.renderQuestion.bind(this)
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

  renderQuestion (question) {
    switch (question.type) {
      case 'Radio':
        return <Radio question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : null}
          update={this.updateSelection} submit={this.submit} />
      case 'Slider':
        return <Slider question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : ''}
          update={this.updateSelection} submit={this.submit} />
      case 'Dropdown':
        return <Dropdown question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : null}
          update={this.updateSelection} submit={this.submit} />
      default:
        return null
    }
  }

  render () {
    return (
      <div>
        {this.state.questions.map(question => (
          <div key={question.id}>
            {!question.conditional && this.renderQuestion(question)}
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
