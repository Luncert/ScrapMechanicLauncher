import React, { Component, CSSProperties } from 'react';
import AnimatedElement, { AnimationProps } from './AnimatedElement';
import './Input.css';

interface InputProps {
    placeholder?: string
    centered?: boolean
    spellCheck?: boolean
    style?: CSSProperties
    animation?: AnimationProps
}

export default class Input extends Component<InputProps> {

    render() {
        let style: any = {
          backgroundColor: 'rgb(56, 56, 56)'
        }
        if (this.props.style) {
          Object.assign(style, this.props.style)
        }
        return (
            <AnimatedElement
                focus={{backgroundColor: 'rgb(100, 100, 100)'}}
                hover={{backgroundColor: 'rgb(80, 80, 80)'}}
                style={style} animation={this.props.animation}>
                <input placeholder={this.props.placeholder}
                    style={{textAlign: this.props.centered ? 'center' : 'inherit'}}
                    spellCheck={this.props.spellCheck != undefined && this.props.spellCheck} />
            </AnimatedElement>
        )
    }
}