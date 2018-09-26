import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setStyle } from '../actions/style'

class Home extends React.Component {
  render () {
    return (
      <div className='home'>
        <h1>Are you a...</h1>
        <div className='columns'>
          <div className='column'>
            <div className='yp'>
              <figure>
                <img className='young_people' src='img/young_people.png' />
              </figure>
              <Link className='button' to='/details' >Student</Link>
            </div>
          </div>
          <div className='column'>
            <div className='hp'>
              <figure>
                <img className='cross' src='img/cross.png' />
              </figure>
              <Link className='button' to='/login' >Health Professional</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.props.dispatch(setStyle('home_background'))
  }
}

export default connect()(Home)
