import React from 'react'

class Radio extends React.Component {
  tooltip (question) {
    const length = question.tooltip.wordArr.length
    return (
      <div className='tooltipQuestion'>{question.tooltip.wordArr.map((word, i) =>
        <div key={i} className='tooltipSection'>
          {question.tooltip.questionArr[i]} <div className='tooltip'>{word}<p className='tooltiptext'>{question.tooltip.defArr[i]}</p></div> {i === length - 1 && question.tooltip.questionArr[i + 1]}
        </div>
      )}
      </div>
    )
  }

  render () {
    const { question, update, answer, updateIfSo } = this.props
    return (
      <div className='qDiv' data-aos='fade-right'>
        <div className='speech-bubble'>
          {question.tooltip ? this.tooltip(question) : <h3>{question.question}</h3>}
        </div>
        <form data-aos='fade-left'>
          <div className='radio'>
            <label className='radio yn'>
              <input type='radio' name='answer' onChange={e => update(e, question.id, question.question)}
                value='Yes' checked={answer === 'Yes'} />
              <svg width='20px' height='20px' viewBox='0 0 20 20'>
                <circle cx='10' cy='10' r='9' />
                <path d='M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z' className='inner' />
                <path d='M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z' className='outer' />
              </svg>
              <span>Yes</span>
            </label>
            <label className='radio yn'>
              <input type='radio' id='No' name='No' onChange={e => update(e, question.id, question.question)}
                value='No' checked={answer === 'No'} />
              <svg width='20px' height='20px' viewBox='0 0 20 20'>
                <circle cx='10' cy='10' r='9' />
                <path d='M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z' className='inner' />
                <path d='M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z' className='outer' />
              </svg>
              <span>No</span>
            </label>
          </div>
          {(answer === question.ifSo.val) && <label>{question.ifSo.question}<br />
            <input type='text' onChange={e => updateIfSo(e, question.id, question.ifSo.question)} />
          </label>}
        </form>
      </div>
    )
  }
}

export default Radio
