import React from 'react'
import { connect } from 'react-redux'
import { setStyle } from '../actions/style'

class Help extends React.Component {
  render () {
    return (
      <div>
        <h1>Help</h1>
        <h3>More about Anamata, the assessment, how to contribute</h3>
      </div>
    )
  }
  componentDidMount () {
    this.props.dispatch(setStyle('help_stuf'))
  }
}

export default connect()(Help)
