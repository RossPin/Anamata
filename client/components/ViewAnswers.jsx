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

  render () {
    const answers = this.state.answers
    const keys = Object.keys(answers)
    return (
      <div>
        {keys.map(key => (
          <div>
            <h1>{key}</h1>
            {Object.keys(answers[key]).map(id => (
              <div>
                <p><strong>{answers[key][id].question}</strong> {answers[key][id].answer}</p>
                {answers[key][id].ifSo && (
                  <div>
                    <p><strong>{answers[key][id].ifSo.question}</strong> {answers[key][id].ifSo.answer}</p>
                  </div>
                )}
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
