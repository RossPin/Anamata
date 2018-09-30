import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeYp, markReviewed } from '../actions/youngPerson'
import { setStyle } from '../actions/style'
import ModalConfirm from './ModalConfirm'

class ViewAnswers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answers: props.youngPerson.answers || {},
      showModal: false
    }
    this.confirm = this.confirm.bind(this)
    this.cancel = this.cancel.bind(this)
  }

  componentDidMount () {
    if (!this.props.youngPerson._id) this.props.history.push('/current')
    this.props.dispatch(setStyle('viewAnswers_background'))
  }

  delete (e) {
    e.preventDefault()
    this.setState({ showModal: true })
  }

  reviewed (e, id) {
    e.preventDefault()
    markReviewed(id)
    this.props.history.push('/current')
  }

  answerList (answerObj) {
    const { answer, question } = answerObj
    return (
      <div>
        <p><strong>{question}</strong></p>
        <ul>
          {Object.keys(answer).map(key => (
            <div key={key}>
              {(typeof answer[key] === 'string') ? <li>{answer[key]}</li> : <li>{key}: {answer[key] ? 'Yes' : 'No'}</li>}
            </div>
          ))}
        </ul>
      </div>
    )
  }

  confirm (e) {
    e.preventDefault()
    this.setState({ showModal: false })
    removeYp(this.props.youngPerson._id)
    this.props.history.push('/current')
  }

  cancel (e) {
    e.preventDefault()
    this.setState({ showModal: false })
  }

  render () {
    const answers = this.state.answers
    const keys = answers ? Object.keys(answers) : false
    return (
      <div>
        <h1>Assessment Risk and Resiliency</h1>
        <img src='./img/GraphRisk.png'alt='graph' />
        {keys && keys.map(key => (
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
        {this.props.youngPerson.resolved && <button className='button' onClick={e => this.reviewed(e, this.props.youngPerson._id)} >Set as Reviewed</button>}
        <button className='button' onClick={e => this.delete(e, this.props.youngPerson._id)} >Delete</button>
        {this.state.showModal && <ModalConfirm confirm={this.confirm} cancel={this.cancel} />}
      </div>
    )
  }
}

const mapStateToProps = ({ youngPerson }) => {
  return { youngPerson }
}

export default connect(mapStateToProps)(ViewAnswers)
