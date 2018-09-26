import React from 'react'
import { connect } from 'react-redux'

class Alert extends React.Component {
  render () {
    return (
      <div className='tooltip'>
        <img className='alertIcon alertGlow' src='/img/Bell.png' />
        <div className='tooltiptext'>{this.props.alerts.map((alert, i) => <p key={i}>{`${alert.name} ${alert.msg}`}</p>)}</div>
      </div>
    )
  }
}

const mapStateToProps = ({ alerts }) => {
  return { alerts }
}

export default connect(mapStateToProps)(Alert)
