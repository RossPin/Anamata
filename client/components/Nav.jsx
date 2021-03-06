import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/logout'
import Alert from './Alert.jsx'

function Nav (props) {
  return (
    <div className='nav' id='nav'>
      {props.auth.isAuthenticated
        ? <div className='navbar-start'>
          <Link to='/'>
            <img className='logo' src='/img/anamata_logo.png' />
          </Link>
          <div className='navbar-end'>
            <span className='user'>{props.auth.user.username.toUpperCase()} </span>
            <Link className='button' to='/current'>Current</Link>
            <Link className='button' to='/reviewed'>Reviewed</Link>
            <button className='button' onClick={() => props.dispatch(logoutUser())}>Logout</button>
            {props.alerts.length > 0 && <Alert />}
          </div>
        </div>
        : <div className='navbar-start'>
          <Link to='/'>
            <img className='logo' src='/img/anamata_logo.png' />
          </Link>
          <div className='navbar-end'>
            <Link className='button helpBtn' to='/help'>Help</Link>
          </div>
        </div>
      }
    </div>
  )
}

const mapStateToProps = ({ auth, alerts }) => {
  return { auth, alerts }
}

export default connect(mapStateToProps)(Nav)
