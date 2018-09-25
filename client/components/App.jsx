import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Questions from './Questions'
import Complete from './Complete'
import Home from './Home'
import Help from './Help'
import Consent from './Consent'
import Details from './Details'
import Current from './Current'
import ViewAnswers from './ViewAnswers'
import { addAlert, resetAlerts } from '../actions/alerts'
import Socket from '../utils/socket'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.joinSocket = this.joinSocket.bind(this)
  }
  componentDidMount () {
    if (this.props.auth.isAuthenticated) {
      let username = this.props.auth.user.username
      this.joinSocket(username)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.auth.isAuthenticated !== this.props.auth.isAuthenticated) {
      if (nextProps.auth.isAuthenticated) {
        let username = nextProps.auth.user.username
        this.joinSocket(username)
      } else this.props.dispatch(resetAlerts)
    }
  }

  joinSocket (username) {
    const socket = Socket.connect()
    socket.emit('joinSession', 'school', username)
    socket.on('alert', (alert) => {
      this.props.dispatch(addAlert(alert))
    })
  }

  render () {
    return (
      <HashRouter>
        <div>
          <section className='hero'>
            <Nav />
            <div className='container'>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route exact path='/help' component={Help} />
              <Route path='/Register' component={Register} />
              <Route path='/current' component={Current} />
              <Route path='/details' component={Details} />
              <Route path='/consent' component={Consent} />
              <Route path='/questions' component={Questions} />
              <Route path='/complete' component={Complete} />
              <Route path='/viewanswers' component={ViewAnswers} />
            </div>
          </section>
        </div>
      </HashRouter>
    )
  }
}

const mapStateToProps = ({ auth, alerts }) => {
  return { auth, alerts }
}

export default connect(mapStateToProps)(App)
