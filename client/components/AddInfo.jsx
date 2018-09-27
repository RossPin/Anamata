import React from 'react'

class AddInfo extends React.Component {
  tooltip (question) {
    const length = question.tooltip.wordArr.length
    return (
      <div className='tooltipQuestion info'>{question.tooltip.wordArr.map((word, i) =>
        <div key={i} className='tooltipSection'>
          {question.tooltip.questionArr[i]} <div className='tooltip'>{word}<p className='tooltiptext'>{question.tooltip.defArr[i]}</p></div> {i === length - 1 && question.tooltip.questionArr[i + 1]}
        </div>
      )}
      </div>
    )
  }

  render () {
    const { question } = this.props
    return (
      <div className='qDiv' data-aos='fade-right'>
        {question.tooltip ? this.tooltip(question) : <div className='info'>{question.question}</div>}
      </div>
    )
  }
}

export default AddInfo
