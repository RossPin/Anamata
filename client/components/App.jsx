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

class App extends React.Component {
  render () {
    console.log(this.context)
    return (
      <HashRouter>
        <div>
          <section id='background' className={`hero ${this.props.style}`}>
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

const mapStateToProps = ({ style }) => {
  return { style }
}

export default connect(mapStateToProps)(App)
