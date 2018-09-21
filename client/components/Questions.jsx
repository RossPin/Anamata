import React from 'react'
import { connect } from 'react-redux'
import Radio from './Radio'
import TextForm from './TextForm'
import Slider from './Slider'
import Dropdown from './Dropdown'
import Listing from './Listing'
import YNifSo from './YNifSo'
import questions from '../data/questions.json'
import Checkbox from './Checkbox'

class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: ['health', 'spirit'],
      currentCategory: 0,
      answers: {
      },
      questions: questions.health.questions,
      title: questions.health.title
    }
    this.updateSelection = this.updateSelection.bind(this)
    this.updateSelectionArray = this.updateSelectionArray.bind(this)
    this.submit = this.submit.bind(this)
    this.renderQuestion = this.renderQuestion.bind(this)
    this.updateIfSo = this.updateIfSo.bind(this)
    this.updateCheckbox = this.updateCheckbox.bind(this)
  }

  updateSelection (e, id, question, show, hide) {
    const questions = this.state.questions
    if (show) questions.find(q => q.id === show).conditional = false
    if (hide) questions.find(q => q.id === hide).conditional = true
    const { answers } = this.state
    answers[id] = { id, question, answer: e.target.value }
    this.setState({ answers })
  }

  updateSelectionArray (val, id, question) {
    const { answers } = this.state
    if (answers[id]) answers[id].answer.push(val)
    else answers[id] = { id, question, answer: [val] }
    this.setState({ answers })
  }

  updateIfSo (e, id, question) {
    const { answers } = this.state
    Object.assign(answers[id], { ifSoQuestion: question, ifSoAnswer: e.target.value })
    this.setState({ answers })
  }

  updateCheckbox (e, questionObj) {
    let question = questionObj.question
    let id = questionObj.id
    const target = e.target
    const { answers } = this.state
    let answer = Object.assign({}, answers[id] ? answers[id].answer : this.createCheckboxArray(questionObj))
    answer[target.value] = target.checked
    answers[id] = { id, question, answer }
    this.setState({ answers })
  }

  createCheckboxArray (question) {
    let response = question.responses
    let answer = {}
    for (let i = 0; i < response.length; i++) {
      answer[response[i].answer] = false
    }
    return answer
  }

  submit (e) {
    e.preventDefault()
    console.log(this.state.answers)
    const categories = this.state.categories
    let currentCategory = this.state.currentCategory

    //TODO save answers in redux state
    
    if (currentCategory < categories.length) {
      currentCategory++
      const nextQuestions = questions[categories[currentCategory]].questions
      const nextTitle = questions[categories[currentCategory]].title
      this.setState({
        currentCategory,
        questions: nextQuestions,
        title: nextTitle,
        answers: {}
      })
    }

    // this.props.history.push('/complete')
  }

  renderQuestion (question) {
    switch (question.type) {
      case 'Radio':
        return <Radio question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : null}
          update={this.updateSelection} submit={this.submit} />
      case 'Checkbox':
        return <Checkbox question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : {}}
          update={this.updateCheckbox} submit={this.submit} />
      case 'TextForm':
        return <TextForm question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : null}
          update={this.updateSelection} submit={this.submit} />
      case 'Slider':
        return <Slider question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : ''}
          update={this.updateSelection} submit={this.submit} />
      case 'Dropdown':
        return <Dropdown question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : null}
          update={this.updateSelection} submit={this.submit} />
      case 'Listing':
        return <Listing question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : []}
          update={this.updateSelectionArray} submit={this.submit} />
      case 'YNifSo':
        return <YNifSo question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : null}
          update={this.updateSelection} updateIfSo={this.updateIfSo} submit={this.submit} />
      default:
        return null
    }
  }

  render () {
    return (
      <div>
        <h1>{this.state.title}</h1>
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
