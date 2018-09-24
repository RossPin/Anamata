import React from 'react'
import { connect } from 'react-redux'
import Radio from './Radio'
import TextForm from './TextForm'
import Slider from './Slider'
import Dropdown from './Dropdown'
import Emoji from './Emoji'
import Listing from './Listing'
import YNifSo from './YNifSo'
import questionData from '../data/questions.json'
import Checkbox from './Checkbox'
import { addSection } from '../actions/youngPerson'

class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: Object.keys(questionData),
      currentCategory: 0,
      answers: {
      },
      questions: questionData.health.questions,
      title: questionData.health.title,
      description: questionData.health.description,
      footer: questionData.health.footer
    }
    this.updateSelection = this.updateSelection.bind(this)
    this.updateSelectionArray = this.updateSelectionArray.bind(this)
    this.submit = this.submit.bind(this)
    this.renderQuestion = this.renderQuestion.bind(this)
    this.updateIfSo = this.updateIfSo.bind(this)
    this.updateCheckbox = this.updateCheckbox.bind(this)
    this.checkConditions = this.checkConditions.bind(this)
  }

  updateSelection (e, id, question) {
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
    const { categories, answers } = this.state
    let currentCategory = this.state.currentCategory
    this.props.dispatch(addSection(categories[currentCategory], answers))
    if (currentCategory < categories.length - 1) {
      currentCategory++
      const { questions, title, description, footer } = questionData[categories[currentCategory]]
      this.setState({
        currentCategory,
        questions,
        title,
        description,
        footer,
        answers: {}
      })
    } else this.props.history.push('/complete')
  }

  renderQuestion (question) {
    switch (question.type) {
      case 'Radio':
        return <Radio question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : ''}
          update={this.updateSelection} submit={this.submit} />
      case 'Checkbox':
        return <Checkbox question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : {}}
          update={this.updateCheckbox} submit={this.submit} />
      case 'TextForm':
        return <TextForm question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : ''}
          update={this.updateSelection} submit={this.submit} />
      case 'Slider':
        return <Slider question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : ''}
          update={this.updateSelection} submit={this.submit} />
      case 'Dropdown':
        return <Dropdown question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : ''}
          update={this.updateSelection} submit={this.submit} />
      case 'Emoji':
        return <Emoji question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : ''}
          update={this.updateSelection} submit={this.submit} />
      case 'Listing':
        return <Listing question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : []}
          update={this.updateSelectionArray} submit={this.submit} />
      case 'YNifSo':
        return <YNifSo question={question} answer={this.state.answers[question.id] ? this.state.answers[question.id].answer : ''}
          update={this.updateSelection} updateIfSo={this.updateIfSo} submit={this.submit} />
      default:
        return null
    }
  }

  checkConditions (question) {
    const { compare, target, value } = question.conditions
    if (this.state.answers[target]) {
      switch (compare) {
        case '=':
          if (this.state.answers[target].answer === value) return this.renderQuestion(question)
          break
        case '>':
          if (this.state.answers[target].answer > value) return this.renderQuestion(question)
          break
        case '<':
          if (this.state.answers[target].answer < value) return this.renderQuestion(question)
          break
        default:
          return null
      }
    }
  }

  render () {
    return (
      <div>
        <h1>{this.state.title}</h1>
        {this.state.description && <p>{this.state.description}</p>}
        {this.state.questions.map(question => (
          <div key={question.id}>
            {question.conditions ? this.checkConditions(question) : this.renderQuestion(question)}
          </div>
        ))}
        {this.state.footer && <p>{this.state.footer}</p>}
        <button className='button' onClick={this.submit} >Submit</button>
      </div>
    )
  }
}

const mapStateToProps = ({ questions }) => {
  return { questions }
}

export default connect(mapStateToProps)(Question)
