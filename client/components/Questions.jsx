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
import { setStyle } from '../actions/style'
import { addSection, addAlert } from '../actions/youngPerson'
import Socket from '../utils/socket'
import AddInfo from './AddInfo'

class Questions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ids: [],
      currentId: '',
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
    this.checkForAlert = this.checkForAlert.bind(this)
    this.sendAlert = this.sendAlert.bind(this)
    this.scroller = this.scroller.bind(this)
    this.listining = this.listining.bind(this)
    this.getIds = this.getIds.bind(this)
  }

  componentDidMount () {
    window.scrollTo(0, 0)
    this.props.dispatch(setStyle('questions_background'))
    this.listining()
  }

  updateSelection (e, id, questionObj) {
    let question = questionObj.question
    let risk = 0
    let resiliency = 0
    // Risk
    if (questionObj.type === 'Slider' && questionObj.risk) {
      risk = e.currentTarget.value * questionObj.risk
    } else if (questionObj.type === 'Radio') {
      for (let i = 0; i < questionObj.responses.length; i++) {
        if (questionObj.responses[i].answer === e.currentTarget.value && questionObj.responses[i].risk) {
          risk = questionObj.responses[i].risk
        }
      }
    } else if (questionObj.risk) {
      risk = questionObj.risk
    }
    // Resilency
    if (questionObj.type === 'Slider' && questionObj.resiliency) {
      resiliency = (10 - e.currentTarget.value) * questionObj.resiliency
    } else if (questionObj.type === 'Radio') {
      for (let i = 0; i < questionObj.responses.length; i++) {
        if (questionObj.responses[i].answer === e.currentTarget.value && questionObj.responses[i].resiliency) {
          resiliency = questionObj.responses[i].resiliency
        }
      }
    } else if (questionObj.resiliency) {
      resiliency = questionObj.resiliency
    }
    const { answers } = this.state
    // rounding
    risk = Math.round(risk * 10) / 10
    resiliency = Math.round(resiliency * 10) / 10
    answers[id] = { id, question, answer: e.currentTarget.value, risk, resiliency }
    this.setState({ answers, currentId: id })
  }

  updateSelectionArray (val, id, questionObj) {
    const { answers } = this.state
    let question = questionObj.question
    if (answers[id]) answers[id].answer.push(val)
    else answers[id] = { id, question, answer: [val] }
    this.setState({ answers, currentId: id })
  }

  updateIfSo (e, id, question) {
    e.preventDefault()
    const { answers } = this.state
    Object.assign(answers[id], { ifSoQuestion: question, ifSoAnswer: e.target.value })
    this.setState({ answers, currentId: id })
  }

  updateCheckbox (e, questionObj) {
    let question = questionObj.question
    let id = questionObj.id
    const target = e.target
    const { answers } = this.state
    let answer = Object.assign({}, answers[id] ? answers[id].answer : this.createCheckboxArray(questionObj))
    answer[target.value] = target.checked
    if (questionObj.risk) {
      answer['risk'] = questionObj.risk
    }
    if (questionObj.resiliency) {
      answer['resiliency'] = questionObj.resiliency
    }
    answers[id] = { id, question, answer }
    this.setState({ answers, currentId: id })
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
    window.scrollTo(0, 0)
    const { categories, answers } = this.state
    let currentCategory = this.state.currentCategory
    this.props.dispatch(addSection(categories[currentCategory], answers))
    this.checkForAlert(answers)
    if (currentCategory < categories.length - 1) {
      currentCategory++
      const { questions, title, description, footer } = questionData[categories[currentCategory]]
      this.setState({
        currentCategory,
        questions,
        title,
        description,
        footer,
        answers: {},
        currentId: ''
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
          update={this.updateSelection} />
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
      case 'AddInfo':
        return <AddInfo question={question} />
      default:
        return null
    }
  }

  checkConditions (question, callback) {
    const { compare, target, value } = question.conditions
    if (this.state.answers[target] || compare === '||>') {
      switch (compare) {
        case '=':
          if (this.state.answers[target].answer === value) return callback(question)
          break
        case '>':
          if (this.state.answers[target].answer > value) return callback(question)
          break
        case '<':
          if (this.state.answers[target].answer < value) return callback(question)
          break
        case 'any':
          const values = Object.values(this.state.answers[target].answer)
          if (values.includes(true)) return callback(question)
          break
        case '=*':
          for (let i = 0; i < value.length; i++) {
            if (this.state.answers[target].answer === value[i]) return callback(question)
          }
          break
        case '||>':
          for (let i = 0; i < target.length; i++) {
            if (this.state.answers[target[i]] && (this.state.answers[target[i]].answer > value)) return callback(question)
          }
          break
        default:
          return null
      }
    }
  }

  checkForAlert (answers) {
    if (answers['9140'] && answers['9140'].answer === 'No') this.sendAlert('not safe, sexual abuse')
  }

  sendAlert (msg) {
    const { firstName, lastName } = this.props.youngPerson.details
    const name = `${firstName} ${lastName}`
    const socket = Socket.connect()
    const schoolId = 'testSchool'
    this.props.dispatch(addAlert({ name, msg }))
    socket.emit('trigger-alert', schoolId, { name, msg })
    setTimeout(() => {
      socket.disconnect()
    }, 30000)
  }

  getIds (questions) {
    const id = []
    questions.map(question => {
      question.conditions ? this.checkConditions(question, question => { question && id.push(question.id) }) : id.push(question.id)
    })
    return id
  }

  scroller (e) {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': e.offsetTop + (Number(document.getElementById('nav').offsetHeight))

    })
  }

  listining () {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 40 || e.keyCode === 9) {
        e.preventDefault()
        const ids = this.getIds(this.state.questions)
        const index = ids.findIndex(id => id === this.state.currentId) + 1
        if (index >= ids.length) return this.scroller(document.getElementById('submit'))
        const element = document.getElementById(ids[index])
        this.setState({ currentId: ids[index] })
        this.scroller(element)
      } else if (e.keyCode === 32 || e.keyCode === 13) {
        if (e.target.type !== 'text') e.preventDefault()
      }
    })
  }

  render () {
    return (
      <div className='questions'>
        <h1>{this.state.title}</h1>
        <p id='description'>{this.state.description && this.state.description}</p>
        {this.state.questions.map(question => (
          <div className='questionContainer' id={question.id} key={question.id}>
            {question.conditions ? this.checkConditions(question, this.renderQuestion) : this.renderQuestion(question)}
          </div>
        ))}
        {this.state.footer && <p>{this.state.footer}</p>}
        <button className='button' id='submit' onClick={this.submit} >Submit</button>
      </div>
    )
  }
}

const mapStateToProps = ({ youngPerson }) => {
  return { youngPerson }
}

export default connect(mapStateToProps)(Questions)
