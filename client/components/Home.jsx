import React from 'react'
import { Link } from 'react-router-dom'
import Slider from './Slider'

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Intro</h1>
        <h3>This is a sample survey</h3>
        <Slider />
        <Link className='button' to='/consent' >Start Survey</Link>
      </div>
    )
  }
}

export default Home
