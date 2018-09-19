import React from 'react'

class Radio extends React.Component {
  render () {
    return (
      <div>
        {this.props.question.responses.map((response, i) => (
          <div key={i}>
            <input type='radio' name='answer' onChange={this.props.update}
              value={response.answer} checked={this.props.answer === response.answer} />{response.answer}<br />
          </div>
        ))}
      </div>
    )
  }
}

export default Radio
