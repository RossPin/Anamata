import React from 'react'

class Listing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: ''
    }
    this.submit = this.submit.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
  }
  updateDetails (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit (e) {
    e.preventDefault()
    this.props.update(this.state.input, this.props.question.id, this.props.question.question)
    this.setState({ input: '' })
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

  render () {
    // eslint-disable-next-line
    const { question, update, answer } = this.props
    return (
      <div className='qDiv' data-aos='fade-right'>
        <div className='speech-bubble'>
          {question.tooltip ? this.tooltip(question) : <h3>{question.question}</h3>}
        </div>
        <form data-aos='fade-left' onSubmit={this.submit} className='listingForm'>
          <input type='text' placeholder='type here' name='input'
            onChange={this.updateDetails}
            value={this.state.input} />
          <i className='fas fa-plus fa-3x' onClick={this.submit} />
          <input type='submit' className='is-hidden' />
          <ul className='listing'>
            { answer.map((val, i) => (
              <div key={i}>
                <li>{val}</li>
              </div>
            ))}
          </ul>
        </form>
      </div>
    )
  }
}

export default Listing
