import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    return (
      <div>
        <Link className='button' to='/question/1' >Start Survey</Link>
      </div>
    )
  }
}

export default Home