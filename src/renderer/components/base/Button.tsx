
import React, { useEffect, CSSProperties } from 'react';
import AnimatedElement from './AnimatedElement';
import './Button.css'

interface ButtonProps {
  fixSize?: boolean
  style?: CSSProperties | undefined
  onClick?: () => void
  children?: string | JSX.Element
}

const Button: React.FC<ButtonProps> = ({fixSize, style, onClick, children}) => {

  useEffect(() => {
    let style: any = {
      backgroundColor: 'rgb(56, 56, 56)'
    }
    if (fixSize == undefined || fixSize) {
      style.width = 30
      style.height = 30
    }
    if (style) {
      Object.assign(style, style)
    }
  }, []);

  return (
    <AnimatedElement
      className='btn'
      onClick={onClick}
      active={{backgroundColor: 'rgb(100, 100, 100)'}}
      hover={{backgroundColor: 'rgb(80, 80, 80)'}}
      style={style}>
        {children}
    </AnimatedElement>
  )
}

export default Button;
