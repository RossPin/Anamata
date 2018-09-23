import React from 'react'

class Slider extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    let show
    let hide
    if (this.props.question.branching) {
      if (e.target.value > this.props.question.branching.value) {
        show = this.props.question.branching.above.show
        hide = this.props.question.branching.above.hide
      } else {
        show = this.props.question.branching.below.show
        hide = this.props.question.branching.below.hide
      }
    }
    this.props.update(e, this.props.question.id, this.props.question.question, show, hide)
  }
  render () {
    return (
      <div>
        <h3>{this.props.question.question}</h3>
        <div>
          <input type='range' min='1' max='100' value={this.props.answer} onChange={this.handleChange} className='slider' id='myRange' />
        </div>
      </div>
    )
  }
}

export default Slider
