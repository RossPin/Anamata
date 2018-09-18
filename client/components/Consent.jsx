import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class Consent extends React.Component{
  constructor(props){
    super(props)    
  }

  render(){
      const first = this.props.questions[0].id   
    return (
      <div>
        <h1>Consent</h1>
        <h3>Do you consent to this?</h3>
        <Link className='button' to={`/question/${first}`}>Yes</Link>
        <Link className='button' to="/">No</Link>
      </div>
    )
  }
}

const mapStateToProps = ({ questions }) => {
  return { questions }
}

export default connect(mapStateToProps)(Consent)