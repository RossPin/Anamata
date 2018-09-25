import React from 'react'

class Radio extends React.Component {
  render () {
    // eslint-disable-next-line
    const { question, update, answer } = this.props
    return (
      <div className='qDiv' data-aos='fade-up'>
        <div className='speech-bubble'>
          <h3> { question.question } </h3>
        </div>
        <form>
          { question.responses.map((response, i) => (
            <div className='radio' key={i}>
              <label htmlFor='rdo-1' className='radio'>
                <input type='radio' id='rdo-1' name='answer' onChange={e => update(e, question.id, question.question, response.show, response.hide)}
                  value={response.answer} checked={answer === response.answer} />
                <svg width='20px' height='20px' viewBox='0 0 20 20'>
                  <circle cx='10' cy='10' r='9' />
                  <path d='M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z' className='inner' />
                  <path d='M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z' className='outer' />
                </svg>
                <span>{response.answer}</span>
              </label>
            </div>
          ))}
        </form>
      </div>
    )
  }
}

export default Radio
