import React from 'react'
import { Link } from 'react-router-dom'

class Complete extends React.Component {
  render () {
    return (
      <div>
        <h3>Survey Complete</h3>
        <Link className='button' to='/' >Return</Link>
      </div>
    )
  }
}

export default Complete
