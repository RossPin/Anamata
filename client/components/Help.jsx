import React from 'react'
import { connect } from 'react-redux'
import { setStyle } from '../actions/style'

class Help extends React.Component {
  render () {
    return (
      <div className='container help'>
        <h1>What is HEADDSS?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi vulputate semper nulla. Nullam porttitor quam iaculis augue
          dignissim imperdiet. Suspendisse tellus turpis, blandit non nisi in,
          facilisis sodales ipsum. Fusce interdum sit amet nunc a eleifend.
          Aenean dictum, ipsum quis vehicula ultricies, nunc magna sodales
          purus, ac convallis enim augue hendrerit eros. Ut nibh est, ultrices
          nec augue ullamcorper, pretium varius nisl. Nulla purus dolor,
          venenatis eget metus et, dignissim rhoncus velit.
          Vivamus tincidunt nunc ut magna laoreet bibendum.
          Pellentesque lobortis maximus mauris, eget posuere ante luctus vel.
          In hac habitasse platea dictumst. Morbi vitae nulla vitae nulla
          molestie aliquet vel in erat. Nulla dignissim at ex pretium finibus.
          Phasellus eu enim tempus, tristique justo fermentum, elementum nulla.
        </p>
      </div>
    )
  }
  componentDidMount () {
    this.props.dispatch(setStyle('help_background'))
  }
}

export default connect()(Help)
