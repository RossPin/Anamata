import React from 'react'
import { Link } from 'react-router-dom'
import CheckboxQ from './CheckboxQ';

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Intro</h1>
        <h3>This is a sample survedfdy</h3>
        <Link className='button' to='/consent' >Start Survey</Link>
        <CheckboxQ />
      </div>
    )
  }
}

export default Home
