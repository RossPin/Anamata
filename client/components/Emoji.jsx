import React from 'react'

class Emoji extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sad: false,
      semiSad: false,
      neutral: false,
      semiHappy: false,
      happy: false
    }
    this.handleChange = this.handleChange.bind(this)
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
    this.props.update(e, this.props.question.id, this.props.question)
    let emoji = e.target.id
    this.setState({
      sad: false,
      semiSad: false,
      neutral: false,
      semiHappy: false,
      happy: false
    })
    this.setState(prevState => ({
      [emoji]: !prevState[emoji]
    }))
  }

  render () {
    const { question } = this.props
    return (
      <div className='qDiv'>
        <div className='speech-bubble'>
          {question.tooltip ? this.tooltip(question) : <h3>{question.question}</h3>}
        </div>
        <div className='emojiButtons' data-aos='fade-left'>
          <span><button className={this.state.sad ? 'ebtnPressed' : 'ebtn'} id='sad' value='1' onClick={e => this.handleChange(e)}><i className='far fa-frown emojiStyle' /></button></span>
          <span><button className={this.state.semiSad ? 'ebtnPressed' : 'ebtn'} id='semiSad' value='2' onClick={this.handleChange}><i className='far fa-frown-open emojiStyle' /></button></span>
          <span><button className={this.state.neutral ? 'ebtnPressed' : 'ebtn'} id='neutral' value='3' onClick={this.handleChange}> <i className='far fa-meh emojiStyle' /></button></span>
          <span><button className={this.state.semiHappy ? 'ebtnPressed' : 'ebtn'} id='semiHappy' value='4' onClick={this.handleChange}> <i className='far fa-grin emojiStyle' /> </button></span>
          <span><button className={this.state.happy ? 'ebtnPressed' : 'ebtn'} id='happy' value='5' onClick={this.handleChange}> <i className='far fa-laugh emojiStyle' /></button></span>
        </div>
      </div>
    )
  }
}
export default Emoji
