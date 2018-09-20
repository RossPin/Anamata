import React from 'react'

class Emoji extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <div>
          <h3>{this.props.question.question}</h3>
        </div>
        <div>
          <span><button className='emoji' id='sad' value='1' onClick={e => this.props.update(e, this.props.question.id, this.props.question.question)}> ☹️</button></span>
          <span><button className='emoji' id='sad' value='2' onClick={e => this.props.update(e, this.props.question.id, this.props.question.question)}> 🙁</button></span>
          <span><button className='emoji' id='sad' value='3' onClick={e => this.props.update(e, this.props.question.id, this.props.question.question)}> 😐</button></span>
          <span><button className='emoji' id='sad' value='4' onClick={e => this.props.update(e, this.props.question.id, this.props.question.question)}> 🙂</button></span>
          <span><button className='emoji' id='sad' value='5' onClick={e => this.props.update(e, this.props.question.id, this.props.question.question)}> 😁</button></span>
        </div>
      </div>
    )
  }
}
export default Emoji

{/* <form class='rating'>
          <label>
            <input type='radio' name='emoji' value='1' />
            <span class='icon'>☹️</span>
          </label>
          <label>
            <input type='radio' name='emoji' value='2' />
            <span class='icon'>🙁</span>
            <span class='icon'>🙁</span>
          </label>
          <label>
            <input type='radio' name='emoji' value='3' />
            <span class='icon'>😐</span>
            <span class='icon'>😐</span>
            <span class='icon'>😐</span>
          </label>
          <label>
            <input type='radio' name='emoji' value='4' />
            <span class='icon'>🙂</span>
            <span class='icon'>🙂</span>
            <span class='icon'>🙂</span>
            <span class='icon'>🙂</span>
          </label>
          <label>
            <input type='radio' name='emoji' value='5' />
            <span class='icon'>😁</span>
            <span class='icon'>😁</span>
            <span class='icon'>😁</span>
            <span class='icon'>😁</span>
            <span class='icon'>😁</span>
          </label>
        </form> */}