import React from 'react'

class ModalConsent extends React.Component {
  render () {
    console.log('Modal render')
    return (
      <div className='modal is-active'>
        <div className='modal-background' />
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Withdraw Consent</p>
          </header>
          <section className='modal-card-body'>
            <p>Sorry</p>
          </section>
          <footer className='modal-card-foot'>
            <button onClick={this.props.decline} className='button is-success'>Continue</button>
            <button onClick={this.props.cancel} className='button'>Cancel</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default ModalConsent
