import React from 'react'

class Emoji extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.props.update(e, this.props.question.id, this.props.question.question)
  }

  render () {
    return (
      <div>
        <div>
          <span><button className='emoji' id='sad' value='1' onClick={this.handleChange}> ☹️</button></span>
          <span><button className='emoji' id='semiSad' value='2' onClick={this.handleChange}> 🙁</button></span>
          <span><button className='emoji' id='neutral' value='3' onClick={this.handleChange}> 😐</button></span>
          <span><button className='emoji' id='semiHappy' value='4' onClick={this.handleChange}> 🙂</button></span>
          <span><button className='emoji' id='Happy' value='5' onClick={this.handleChange}> 😁</button></span>
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