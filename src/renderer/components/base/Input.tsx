import React, { Component, CSSProperties } from 'react';
import AnimatedElement, { AnimationProps } from './AnimatedElement';
import './Input.css';

interface InputProps extends AnimationProps {
    value?: string
    placeholder?: string
    centered?: boolean
    spellCheck?: boolean
    style?: CSSProperties
    onChange?: (newValue: string) => void
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
                className='input'
                focusAnimation={{backgroundColor: 'rgb(100, 100, 100)'}}
                hoverAnimation={{backgroundColor: 'rgb(80, 80, 80)'}}
                style={style} animation={this.props}>
                <input placeholder={this.props.placeholder}
                    style={{textAlign: this.props.centered ? 'center' : 'inherit'}}
                    value={this.props.value || ''}
                    onChange={e => this.props.onChange && this.props.onChange(e.target.value)}
                    spellCheck={this.props.spellCheck != undefined && this.props.spellCheck} />
            </AnimatedElement>
        )
    }
}