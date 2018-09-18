import React from 'react'
import { connect } from 'react-redux'
import request from '../utils/api'

class Current extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current: []
    }
  }

  componentDidMount () {
    if (this.props.auth.isAuthenticated) {
      request('get', 'yp/view/current')
        .then((response) => {
          const current = response.body
          this.setState({ current })
        })
    } else this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <h1>Un-Reviewed surveys</h1>
        <ul>
          {this.state.current.map((yp, i) => (
            <li key={i}>{`${yp.firstName} ${yp.lastName}`}</li>

          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Current)
