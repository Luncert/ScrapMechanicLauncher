import React, { Component } from 'react';
import './Img.scss';
import StyledComponent, { StyledComponentProps } from './StyledComponent';

interface ImgProps extends StyledComponentProps {
    src: string
}
  
export default class Img extends StyledComponent<ImgProps> {

    render() {
        return <img className='image' src={this.props.src}
            style={this.parseStyle()} />
    }
}