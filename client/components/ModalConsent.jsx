import React from 'react'

class ModalConsent extends React.Component {
  render () {
    return (
      <div className='modal is-active'>
        <div className='modal-background' />
        <div className='modal-card'>
          <header className='modal-card-head modalHead'>
            <p className='modal-card-title' id='consentModalTitle'>Thank You</p>
          </header>
          <section className='modal-card-body modalBody'>
            <div className='modalBackground'>
              <p className='consentP'>Thanks for giving it a go! If you would like to chat feel free to pop in to see the school health professional.</p>
            </div>
          </section>
          <footer className='modal-card-foot modalFoot'>
            <button onClick={this.props.decline} className='button'>Complete</button>
            <button onClick={this.props.cancel} className='button'>Return</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default ModalConsent
