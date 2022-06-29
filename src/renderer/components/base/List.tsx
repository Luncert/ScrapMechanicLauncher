import React, { Component } from 'react';
import AnimatedElement, { AnimationProps } from './AnimatedElement';
import Divider from './Divider';
import './List.scss';
import StyledComponent, { StyledComponentProps } from './StyledComponent';

interface ListProps extends StyledComponentProps {
    children?: JSX.Element | JSX.Element[]
}

interface ListItemProps extends StyledComponentProps, AnimationProps {
    onClick?: () => void
    children?: string | JSX.Element | JSX.Element[]
}
  
export class List extends StyledComponent<ListProps> {

    render() {
        const children = this.props.children
        // for (let child of children) {
        //     if (child.type != ListItem) {
        //         console.error('all child element must be ListItem', child.type)
        //         throw new Error('all child element must be ListItem')
        //     }
        // }
        const divided: JSX.Element[] = []
        if (children) {
            if (children.constructor.name == 'Array') {
                let tmp = (children as JSX.Element[])
                divided.push(tmp[0])
                for (let i = 1; i < tmp.length; i++) {
                    divided.push(<Divider key={'divider-' + i} />)
                    divided.push(tmp[i])
                }
            } else {
                divided.push(children as JSX.Element)
            }
        }
        return <div className='list' style={this.parseStyle()}>{divided}</div>
    }
}

export class ListItem extends StyledComponent<ListItemProps> {

    render() {
        return (
            <AnimatedElement
                className='list-item'
                onClick={this.props.onClick}
                style={this.parseStyle()}
                animation={this.props}>
                {this.props.children}
            </AnimatedElement>
        )
    }
}
