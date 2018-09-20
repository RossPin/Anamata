import React from 'react'

class CheckboxQ extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      question: 'what what',
      checkboxes: [{ desc: 'bssssssssssssslah', value: true }, { desc: 'two', value: false }]
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e, i) {
    const target = e.target
    const value = target.checked
    let checkboxes = this.state.checkboxes
    checkboxes[i].value = value
    this.setState({
      checkboxes: checkboxes
    })
  }

  render () {
    const { question, checkboxes } = this.state
    return (
      <div>
        <h3>{question}</h3>
        <form>
          {checkboxes.map((checkbox, i) => (
            <div key={i}>
              <label>
                <input type='checkbox' name='answer'
                  value={checkbox.desc} checked={checkbox.value} onChange={e => this.handleChange(e, i)} />
                {checkbox.desc}
              </label>
            </div>
          ))}
        </form>
      </div>
    )
  }
}

export default CheckboxQ
