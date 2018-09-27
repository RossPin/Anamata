import React from 'react'

class ModalConfirm extends React.Component {
  render () {
    console.log('Modal render')
    return (
      <div className='modal is-active'>
        <div className='modal-background' />
        <div className='modal-card'>
          <header className='modal-card-head modalHead'>
            <p className='modal-card-title' id='consentModalTitle'>Are You Sure?</p>
          </header>
          <footer className='modal-card-foot modalFoot'>
            <button onClick={this.props.confirm} className='button'>Yes</button>
            <button onClick={this.props.cancel} className='button'>No</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default ModalConfirm
