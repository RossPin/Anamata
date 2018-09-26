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
    if (id === 'genderDetails') {
      let gender = e
      gender.target.name = 'gender'
      update(gender)
    } else {
      update(e, id, question)
    }
  }

  tooltip (question) {
    const length = question.tooltip.wordArr.length
    return (
      <div className='tooltipQuestion'>{question.tooltip.wordArr.map((word, i) =>
        <div key={i} className='tooltipSection'>
          {question.tooltip.questionArr[i]} <div className='tooltip'>{word}<p className='tooltiptext'>{question.tooltip.defArr[i]}</p></div> {i === length - 1 && question.tooltip.questionArr[i + 1]}
        </div>
      )}
      </div>
    )
  }

  handleChange (e) {
    this.props.update(e, this.props.question.id, this.props.question.question)
  }

  render () {
    const { question, answer, update } = this.props
    return (
      <div className='qDiv' data-aos='fade-right'>
        <div className='speech-bubble'>
          {question.tooltip ? this.tooltip(question) : <h3>{question.question}</h3>}
        </div>
        <div className='sliderAns' data-aos='fade-right'>
          {question.responses.left}
          <input type='range' min='0' max='10' value={answer} onChange={e => this.updateCheck(e, update, question.id, question)} className='slider' />
          {question.responses.right}
        </div>
        {'check' in question.responses
          ? <label>
            <input type='checkbox' name='answer'
              value={question.responses.check} checked={this.state.check} onChange={e => this.updateCheck(e, update, question.id, question)} />
            {question.responses.check}
          </label>
          : null }
      </div>
    )
  }
}

export default Slider
