import React, { Component } from 'react';
import './Line.scss';

interface LineProps {
    align?: 'center' | 'left' | 'right'
    children?: string | JSX.Element | JSX.Element[]
}
  
export default class Line extends Component<LineProps> {

    render() {
        return <div className='line' style={{justifyContent: this.props.align}}>{this.props.children}</div>
    }
}