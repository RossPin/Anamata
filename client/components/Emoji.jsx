import React from 'react'

class Emoji extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>
        <button className='emoji' id='sad' value='1'> ☹️</button>
        <button className='emoji' id='sad' value='2'> 🙁</button>
        <button className='emoji' id='sad' value='3'> 😐</button>
        <button className='emoji' id='sad' value='4'> 🙂</button>
        <button className='emoji' id='sad' value='5'> 😁</button>
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