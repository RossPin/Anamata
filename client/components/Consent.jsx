import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Consent extends React.Component {
  render () {
    return (
      <div>
        <h1>Consent</h1>
        <h3>Do you consent to this?</h3>
        <Link className='button' to={`/questions`}>Yes</Link>
        <Link className='button' to='/'>No</Link>
      </div>
    )
  }
}

const mapStateToProps = ({ questions }) => {
  return { questions }
}

export default connect(mapStateToProps)(Consent)
