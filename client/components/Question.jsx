import React from 'react'
import { connect } from 'react-redux'
import Radio from './Radio'

class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: '',
      question: { responses: [] }
    }
    this.updateSelection = this.updateSelection.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount () {
    const question = this.props.questions.find(x => x.id === this.props.match.params.id)
    this.setState({ question })
  }

  componentWillReceiveProps (nextProps) {
    const question = nextProps.questions.find(x => x.id === nextProps.match.params.id)
    this.setState({ question, answer: '' })
  }

  updateSelection (e) {
    this.setState({ answer: e.target.value })
  }

  submit (e) {
    e.preventDefault()
    const next = this.state.question.responses.find(response => response.answer === this.state.answer).next
    if (next === 'complete') this.props.history.push(`/complete`)
    else {
      this.props.history.push(`/question/${next}`)
    }
  }

  render () {
    return (
      <div>
        <h3>{this.state.question.question}</h3>
        <form className='Login' onSubmit={this.submit}>
          <Radio question={this.state.question} answer={this.state.answer}
            update={this.updateSelection} submit={this.submit} />
          <input className='button' type='submit' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ questions }) => {
  return { questions }
}

export default connect(mapStateToProps)(Question)
