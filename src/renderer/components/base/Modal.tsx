import React, { Component } from 'react';
import './Modal.scss';

interface ModalProps {
  children?: string | JSX.Element | JSX.Element[]
}

interface ModalHeaderProps {
  children?: string | JSX.Element | JSX.Element[]
}

interface ModalContentProps {
  children?: string | JSX.Element | JSX.Element[]
}

interface ModalFootProps {
  children?: string | JSX.Element | JSX.Element[]
}

export class Modal extends Component<ModalProps> {

  render() {
    return (
      <div className='modal'>
        { this.props.children }
      </div>
    )
  }
}

export class ModalHeader extends Component<ModalHeaderProps> {

  render() {
    return (
      <div className='modal-header'>
        { this.props.children }
      </div>
    )
  }
}

export class ModalContent extends Component<ModalContentProps> {

  render() {
    return (
      <div className='modal-content'>
        { this.props.children }
      </div>
    )
  }
}

export class ModalFoot extends Component<ModalFootProps> {

  render() {
    return (
      <div className='modal-foot'>
        { this.props.children }
      </div>
    )
  }
}
