import React from 'react';
import './Label.scss';
import StyledComponent, { StyledComponentProps } from './StyledComponent';

interface LabelProps extends StyledComponentProps {
    children?: string | JSX.Element | JSX.Element[]
}

export default class Label extends StyledComponent<LabelProps> {

    render() {
        return <span className='label' style={this.parseStyle()}>{this.props.children}</span>
    }
}