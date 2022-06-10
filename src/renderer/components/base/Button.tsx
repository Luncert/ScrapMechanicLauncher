
import React, { Component, CSSProperties } from 'react';
import AnimatedElement, { AnimationProps } from './AnimatedElement';
import './Button.css'

interface ButtonProps {
  fixSize?: boolean
  style?: CSSProperties
  animation?: AnimationProps
  onClick?: () => void
  children?: string | JSX.Element
}

export default class Button extends Component<ButtonProps> {

  render() {
    let style: any = {
      backgroundColor: 'rgb(56, 56, 56)'
    }
    if (this.props.fixSize == undefined || this.props.fixSize) {
      style.width = 30
      style.height = 30
    }
    if (this.props.style) {
      Object.assign(style, this.props.style)
    }
    return (
      <AnimatedElement
        className='btn'
        onClick={this.props.onClick}
        active={{backgroundColor: 'rgb(100, 100, 100)'}}
        hover={{backgroundColor: 'rgb(80, 80, 80)'}}
        style={style} animation={this.props.animation}>
          {this.props.children}
      </AnimatedElement>
    )
  }
}