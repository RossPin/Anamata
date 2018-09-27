import React from 'react'
import { connect } from 'react-redux'
import { resetYp, createYp } from '../actions/youngPerson'
import { setStyle } from '../actions/style'

class Complete extends React.Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  componentDidMount () {
    window.scrollTo(0, 0)
    createYp(this.props.youngPerson)
    this.props.dispatch(setStyle('help_background'))
  }

  submit (e) {
    e.preventDefault()
    this.props.dispatch(resetYp())
    this.props.history.push('/')
  }

  render () {
    return (
      <div className='complete'>
        <h1>Who You Are</h1>
        <img src='/img/outline.gif' />
        <h1>Useful Resourses</h1>
        <ul>
          <li><a href='https://www.anamatacafe.org.nz/' target='_blank'>Anamata Cafe</a></li>
          <li><a href='https://kidshealth.org/en/teens/love.html'target='_blank'>teen love</a></li>
          <li><a href=' http://insideout.org.nz/'target='_blank'>insideout</a></li>
          <li><a href='https://teentalk.ca/learn-about/consent-2/'target='_blank'>consent</a></li>
          <li><a href='https://www.youtube.com/watch?v=pZwvrxVavnQ'target='_blank'>yt video</a></li>
          <li><a href='https://www.safetotalk.nz/what-is-sexual-harm/?gclid=EAIaIQobChMIrKuejsDI3QIVBqqWCh3PwgQREAAYASAAEgJ2efD_BwE'target='_blank'>safe to talk</a></li>
          <li><a href='https://www.youthline.co.nz/'target='_blank'>youthline Free call 0800 376 633 | Free text 234</a></li>
          <li><a href='https://kidshealth.org/en/teens/healthy-relationship.html'target='_blank'>kid health</a></li>
        </ul>
        <button className='button' onClick={this.submit}>Finish</button>
      </div>
    )
  }
}

const mapStateToProps = ({ youngPerson }) => ({ youngPerson })

export default connect(mapStateToProps)(Complete)
