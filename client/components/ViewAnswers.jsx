import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeYp } from '../actions/youngPerson'

class ViewAnswers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answers: props.youngPerson.answers || {}
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ answers: nextProps.youngPerson.answers })
  }

  delete (e, id) {
    e.preventDefault()
    removeYp(id)
    this.props.history.push('/current')
  }

  answerList (answers) {
    return (
      <div>
        <p><strong>{answers.question}</strong></p>
        <ul>
          {Object.keys(answers.answer).map(key => (
            <li key={key}>{key}: {answers.answer[key] ? 'Yes' : 'No'}</li>
          ))}
        </ul>
      </div>
    )
  }

  render () {
    const answers = this.state.answers
    const keys = Object.keys(answers)
    return (
      <div>
        {keys.map(key => (
          <div key={key}>
            <h1>{key}</h1>
            {Object.keys(answers[key]).map(id => (
              <div key={id}>
                {(typeof answers[key][id].answer === 'object') ? this.answerList(answers[key][id]) : <p><strong>{answers[key][id].question}</strong> {answers[key][id].answer}</p>}
                {answers[key][id].ifSoQuestion && <p><strong>{answers[key][id].ifSoQuestion}</strong> {answers[key][id].ifSoAnswer}</p>}
              </div>
            ))}
          </div>
        ))}
        <Link className='button' to='/current'>Back</Link>
        <button className='button' onClick={e => this.delete(e, this.props.youngPerson._id)} >Delete</button>
      </div>
    )
  }
}

const mapStateToProps = ({ youngPerson }) => {
  return { youngPerson }
}

export default connect(mapStateToProps)(ViewAnswers)
