import React from 'react'
import { connect } from 'react-redux'
import { setYp } from '../actions/youngPerson'
import { setStyle } from '../actions/style'
import request from '../utils/api'

class Reviewed extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reviewed: []
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
    request('get', 'yp/view/reviewed')
      .then((response) => {
        const reviewed = response.body
        this.setState({ reviewed })
      })
  }

  select (yp) {
    this.props.dispatch(setYp(yp))
    this.props.history.push('/viewanswers')
  }

  render () {
    return (
      <div className='current'>
        <h1 style={{ margin: '0 auto' }}>Reviewed surveys</h1>
        <div className='currentContainer'>
          <div className='currentList'>
            <div className='listBox'>
              <ul>
                {this.state.reviewed.map((yp, i) => (
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

export default connect(mapStateToProps)(Reviewed)
