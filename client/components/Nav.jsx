import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/logout'

function Nav (props) {
  return (
    <div className='nav'>
      {props.auth.isAuthenticated
        ? <div className='navbar-start'>
          <Link to='/'>
            <img className='logo' src='/img/anamata_logo.png' />
          </Link>
          <div className='navbar-end'>
            <span className='user'>{props.auth.user.username.toUpperCase()} </span>
            <Link className='button' to='/current'>Current</Link>
            <button className='button' onClick={() => props.dispatch(logoutUser())}>Logout</button>
          </div>
        </div>
        : <div className='navbar-start'>
          <Link to='/'>
            <img className='logo' src='/img/anamata_logo.png' />
          </Link>
          <div className='navbar-end'>
            <Link className='button help' to='/help'>Help</Link>
          </div>
        </div>
      }
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Nav)
