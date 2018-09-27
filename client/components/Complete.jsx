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
    // createYp(this.props.youngPerson)
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
        <h1>You Are</h1>
        <img src='/img/outline.gif' />
        <h1>Useful Resourses</h1>
        <ul>
          <li><a href='https://www.anamatacafe.org.nz/' target='_blank'>Anamata Cafe</a></li>
          <li><a href='https://www.anamatacafe.org.nz/' target='_blank'>Anamata Cafe</a></li>
        </ul>
        <button className='button' onClick={this.submit}>Finish</button>
      </div>
    )
  }
}

const mapStateToProps = ({ youngPerson }) => ({ youngPerson })

export default connect(mapStateToProps)(Complete)
