import React from 'react'
import { connect } from 'react-redux'
import { setYp } from '../actions/youngPerson'
import { setStyle } from '../actions/style'
import request from '../utils/api'
import { getRisks, triage } from '../utils/eval'

class Current extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current: [],
      alert: [],
      high: [],
      normal: []
    }
    this.select = this.select.bind(this)
    this.updateList = this.updateList.bind(this)
  }

  componentDidMount () {
    if (this.props.auth.isAuthenticated) this.updateList()
    else this.props.history.push('/')
    this.props.dispatch(setStyle('current_background'))
  }

  updateList () {
    request('get', 'yp/view/current')
      .then((response) => {
        const current = response.body
        current.map(yp => { yp.risk = getRisks(yp) })
        const { alert, high, normal } = triage(current)        
        this.setState({ current, alert, high, normal })
      })
  }

  select (yp) {
    this.props.dispatch(setYp(yp))
    this.props.history.push('/viewanswers')
  }

  render () {
    return (
      <div className='current'>
        <h1 style={{ margin: '0 auto' }}>Un-Reviewed surveys</h1>
        <div className='currentContainer'>
          <div className='currentList'>
            <h3>Alert Status</h3>
            <div className='listBox'>
              <ul>
                {this.state.alert.map((yp, i) => (
                  <li key={i}><div className='link' onClick={() => this.select(yp)}> {yp.details ? `${yp.details.firstName} ${yp.details.lastName}` : 'missing details'}</div></li>
                ))}
              </ul>
            </div>
          </div>
          <div className='currentList'>
            <h3>High Risk</h3>
            <div className='listBox'>
              <ul>
                {this.state.high.map((yp, i) => (
                  <li key={i}><div className='link' onClick={() => this.select(yp)}> {yp.details ? `${yp.details.firstName} ${yp.details.lastName}` : 'missing details'}</div></li>
                ))}
              </ul>
            </div>
          </div>
          <div className='currentList'>
            <h3>Normal Risk</h3>
            <div className='listBox'>
              <ul>
                {this.state.normal.map((yp, i) => (
                  <li key={i}><div className='link' onClick={() => this.select(yp)}> {yp.details ? `${yp.details.firstName} ${yp.details.lastName}` : 'missing details'}</div></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Current)
